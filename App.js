import React from 'react';
import {PersistGate} from 'redux-persist/src/integration/react';
import {store, persistor} from './src/redux/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack, AuthStack} from './src/Navigation';
import {Provider, useSelector} from 'react-redux';

const Root = createNativeStackNavigator();
const RootStack = () => {
  const token = useSelector(state => state.authReducer.token);
  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      {token ? (
        <Root.Screen name="AppStack" component={AppStack} />
      ) : (
        <Root.Screen name="AuthStack" component={AuthStack} />
      )}
    </Root.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
