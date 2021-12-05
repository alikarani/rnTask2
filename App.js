import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/src/integration/react';
import { store, persistor } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './src/Navigation';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}
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
