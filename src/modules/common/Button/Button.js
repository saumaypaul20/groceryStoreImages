import React from 'react';
import {Button as RPButton} from 'react-native-paper';

const Button = ({title, onPress, extraButtonStyle, extraButtonTextStyle}) => {
  return (
    <RPButton
      mode="contained"
      onPress={onPress}
      style={{
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        ...extraButtonStyle,
      }}>
      {title}
    </RPButton>
  );
};

export default Button;
