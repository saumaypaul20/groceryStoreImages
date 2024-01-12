import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useAuthHook from '../../../hooks/useAuthHook';
import Button from '../../common/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {NavigationKeys} from '../../navigator/NavigationKeys';

const Logout = () => {
  const {logoutAction} = useAuthHook();
  const {replace} = useNavigation();
  const onPressLogout = () => {
    logoutAction();
    replace(NavigationKeys.LOGIN);
  };
  return (
    <Button
      extraButtonStyle={{width: 100}}
      onPress={onPressLogout}
      title="Logout"
    />
  );
};

export default Logout;
