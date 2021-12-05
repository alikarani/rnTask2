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
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import TextInputWrapper from '../../components/TextInput';
import { createPost } from '../../redux/actions/postActions';
const CreatePost = (props) => {
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [errorText, setErrorText] = React.useState("");
    const [succesText, setSuccessText] = React.useState("");

    const onSubmit = async () => {
        if (!title.trim()) {
            setErrorText("Invalid Title")
        }
        else if (!description.trim()) {
            setErrorText("Invalid Description")
        }
        else {
            const data = {
                "Title": title,
                "Description": description
            }
            const response = await dispatch(createPost(data));
            setTitle("")
            setDescription("")
            setErrorText("")
            setSuccessText(response?.message)
            setTimeout(() => { setSuccessText("") }, 3000)
        }
    }
    const navigateToPost = () => {
        props.navigation.navigate('GetPost')
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>Social Media App</Text>
                    <TextInputWrapper
                        onChangeText={setTitle}
                        value={title}
                        placeholder="Title"
                    />
                    <TextInputWrapper
                        onChangeText={setDescription}
                        value={description}
                        placeholder="Description"
                    />
                    <Text style={styles.errorText}>{errorText}</Text>
                    <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Create</Text>
                    </TouchableOpacity>
                    <Text style={styles.successText}>{succesText}</Text>
                </View>
                <TouchableOpacity onPress={navigateToPost} style={styles.postScreenButton}>
                    <Text>Back to Post screen</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default CreatePost;
