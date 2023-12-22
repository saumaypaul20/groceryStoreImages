import {TextInput, View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const InputBox = ({value, onChange, placeholder, extraStyles}) => {
  return (
    <TextInput
      style={{...styles.inputBox, ...extraStyles}}
      defaultValue={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={'#444'}
    />
  );
};

const styles = StyleSheet.create({
  inputBox: {borderWidth: 1, borderRadius: 8, color: '#000', padding: 16},
});

export default InputBox;
