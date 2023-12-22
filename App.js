import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Login from './src/modules/components/Login/Login';
import AllStores from './src/modules/components/AllStores/AllStores';
import RootNavigator from './src/modules/navigator/RootNavigator';
import { store } from './src/store/store';
import { Provider } from 'react-redux';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const App = () => {
  return (
    <Provider store={store}>
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        {/* <Login/> */}
        <RootNavigator />
      </SafeAreaView>
    </PaperProvider>
    </Provider>
  );
};

export default App;
