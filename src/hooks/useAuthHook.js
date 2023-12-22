// StorePageLogic.js

import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthService} from '../services/auth.service';

const useAuthHook = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const onAuthStateChanged = (user) => {
    setLoggedIn(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const loginAction = async () => {
    if (!userName || !password) return;
    const res = await AuthService.login(userName, password);
    if (res) {
      setLoggedIn(true);
    }
  };
  return {
    loggedIn,
    loginAction,
    userName,
    setUserName,
    password,
    setPassword,
  };
};

export default useAuthHook;
