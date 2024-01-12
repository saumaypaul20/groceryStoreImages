// StorePageLogic.js

import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthService} from '../services/auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useAuthHook = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const logoutAction = async () => {
    const res = await AuthService.logout();
    await AsyncStorage.clear();
    // if (res) {
    //   setLoggedIn(true);
    // }
  };
  

  const onAuthStateChanged = async (user) => {
    setLoggedIn(user);
    try {
      await AsyncStorage.setItem('loggedIn', JSON.stringify(user));
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const loginAction = async () => {
    console.log(userName, password);
    if (!userName || !password) return;
    const res = await AuthService.login(userName, password);
    console.log("🚀 ~ file: useAuthHook.js ~ line 40 ~ loginAction ~ res", res)
    // if (res) {
    //   // setLoggedIn(true);
    // }
  };
  return {
    loggedIn,
    loginAction,
    userName,
    setUserName,
    password,
    setPassword,
    logoutAction
  };
};

export default useAuthHook;
