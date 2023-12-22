import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Login from './src/modules/components/Login/Login';
import AllStores from './src/modules/components/AllStores/AllStores';
import RootNavigator from './src/modules/navigator/RootNavigator';


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
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        {/* <Login/> */}
        <RootNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
