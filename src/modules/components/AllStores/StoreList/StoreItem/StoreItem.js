import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationKeys} from '../../../../navigator/NavigationKeys';
import {Surface, Text} from 'react-native-paper';

const StoreItem = ({item}) => {
  const {navigate} = useNavigation();
  const onPress = () => {
    navigate(NavigationKeys.STORE_PAGE, {item});
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Surface style={styles.surface} elevation={2}>
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
      </Surface>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    // height: 80,
    // width: 80,
    // alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default StoreItem;
