import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Button = ({title, onPress, extraButtonStyle, extraButtonTextStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: 200,
          height: 50,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          ...extraButtonStyle,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            ...extraButtonTextStyle,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
