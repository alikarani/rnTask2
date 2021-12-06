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
import {useDispatch} from 'react-redux';
import TextInputWrapper from '../../components/TextInput';
import {login} from '../../redux/actions/authActions';
const LoginScreen = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorText, setErrorText] = React.useState('');

  const onSubmit = async () => {
    const regexExp =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email.trim()) {
      setErrorText('Please enter email');
    } else if (!password.trim()) {
      setErrorText('Please enter password');
    } else if (!regexExp.test(email.trim().toLowerCase())) {
      setErrorText('Invalid Email');
    } else {
      const data = {
        email: email.trim(),
        password: password.trim(),
      };
      await dispatch(login(data));
      setEmail('');
      setPassword('');
      setErrorText('');
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Social Media App</Text>
          <TextInputWrapper
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <TextInputWrapper
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Text style={styles.errorText}>{errorText}</Text>
          <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
