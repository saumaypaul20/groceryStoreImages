import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/modules/components/Login/Login';
import AllStores from './src/modules/components/AllStores/AllStores';
import RootNavigator from './src/modules/navigator/RootNavigator';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        {/* <Login/> */}
       <RootNavigator />
      
    </SafeAreaView>
  );
};


export default App;
