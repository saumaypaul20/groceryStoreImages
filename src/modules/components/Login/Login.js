import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Button from '../../common/Button/Button';
import InputBox from '../../common/InputBox/InputBox';
import {ScreenWrapper} from '../../common/ScreenWrapper/ScreenWrapper';
import {useNavigation} from '@react-navigation/native';
import {NavigationKeys} from '../../navigator/NavigationKeys';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {replace} = useNavigation();
  const handleLogin = async () => {
    console.log(userName);
    console.log(password);
    replace(NavigationKeys.ALL_STORES);
  };

  return (
    <ScreenWrapper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.form}>
          <InputBox
            value={userName}
            onChange={setUserName}
            placeholder="Username"
            extraStyles={{width: '60%', marginBottom: 10}}
          />
          <InputBox
            value={password}
            onChange={setPassword}
            placeholder="Password"
            extraStyles={{width: '60%', marginBottom: 10}}
          />
          <Button title={'Login'} onPress={handleLogin} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
});

export default Login;
