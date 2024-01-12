import {TextInput, View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const InputBox = (props) => {
  const {value, onChange, placeholder, extraStyles, keyboardType, secureTextEntry} = props;
  return (
    <TextInput
      style={{...styles.inputBox, ...extraStyles}}
      defaultValue={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={'#444'}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  inputBox: {borderWidth: 1, borderRadius: 8, color: '#000', padding: 16},
});

export default InputBox;
