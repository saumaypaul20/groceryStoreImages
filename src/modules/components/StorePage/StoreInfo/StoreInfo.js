import {View, Text} from 'react-native';
import React from 'react';

const StoreInfo = ({item}) => {
  return (
    <View>
      <Text style={{color: '#000', fontSize: 30}}>{item.name}</Text>
      <Text style={{color: '#000', fontSize: 16}}>Address: {item.address}</Text>
      <Text style={{color: '#000', fontSize: 16}}>Area: {item.area}</Text>
      <Text style={{color: '#000', fontSize: 16}}>Route: {item.route}</Text>
      <Text style={{color: '#000', fontSize: 16}}>Type: {item.type}</Text>
    </View>
  );
};

export default StoreInfo;
