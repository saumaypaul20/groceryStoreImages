import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationKeys} from '../../../../navigator/NavigationKeys';

const StoreItem = ({item}) => {
  const {navigate} = useNavigation();
  const onPress = () => {
    navigate(NavigationKeys.STORE_PAGE, {item});
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{padding: 20}}>
        <Text style={{color: '#000', fontSize: 10}}>{item?.type}</Text>
        <Text style={{color: '#000', fontSize: 20}}>{item?.name}</Text>
        <Text style={{color: '#000', fontSize: 12}}>{item?.address}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#000', fontSize: 10}}>
            Area: <Text style={{fontStyle: 'italic'}}>{item?.area}</Text>{' '}
          </Text>
          <Text style={{color: '#000', fontSize: 10}}>
            Type: <Text style={{fontStyle: 'italic'}}>{item?.route}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StoreItem;
