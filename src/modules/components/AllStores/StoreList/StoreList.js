import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import StoreItem from './StoreItem/StoreItem';

const ITEM_HEIGHT = 113.3;

const StoreList = ({data}) => {

  const renderItem = ({item}) => {
    return <StoreItem item={item} />;
  };

  const keyExtractor = (item, index) => {
    return item.id.toString();
  };

  const EmptyComponent = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'#000'} />
      </View>
    );
  };


  return (
    <FlatList
      // style={{width: '100%'}}
      // contentContainerStyle={{  flex: 1 }}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      maxToRenderPerBatch={100}
      ListEmptyComponent={EmptyComponent}
      removeClippedSubviews={true}
      windowSize={60}
      getItemLayout={(data, index) => (
       {length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index}
      )}
    />
  );
};

export default StoreList;
