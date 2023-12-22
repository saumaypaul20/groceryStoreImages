import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login/Login';
import AllStores from '../components/AllStores/AllStores';
import {NavigationKeys} from './NavigationKeys';
import StorePage from '../components/StorePage/StorePage';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigationKeys.LOGIN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={NavigationKeys.LOGIN} component={Login} />
        <Stack.Screen name={NavigationKeys.ALL_STORES} component={AllStores} />
        <Stack.Screen name={NavigationKeys.STORE_PAGE} component={StorePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
