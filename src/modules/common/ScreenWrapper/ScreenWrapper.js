import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ScreenWrapper = ({children, style = {}}) => {
  return <View style={[styles.screenWrapper, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 20,
    padding: 16, 
  },
});
