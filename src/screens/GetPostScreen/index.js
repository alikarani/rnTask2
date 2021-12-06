/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getPost} from '../../redux/actions/postActions';
import {logout} from '../../redux/actions/authActions';
import {useFocusEffect} from '@react-navigation/native';

const GetPost = props => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer.posts);

  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        await dispatch(getPost());
      }
      fetchData();
    }, []),
  );
  const backToCreate = () => {
    props.navigation.navigate('CreatePost');
  };
  const onLogout = async () => {
    await dispatch(logout());
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.listItem,
          {
            borderBottomColor:
              index == posts.length - 1 ? 'transparent' : 'grey',
            borderBottomWidth: index == posts.length - 1 ? 0 : 1,
          },
        ]}>
        <Text style={styles.title}>Title: {item?.Title}</Text>
        <Text style={styles.title}>Description: {item?.Description}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={backToCreate} style={styles.backToCreate}>
            <Text>Back to Create Post</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onLogout} style={styles.backToCreate}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={posts}
          renderItem={(item, index) => renderItem(item, index)}
          keyExtractor={item => item.PostId}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
export default GetPost;
