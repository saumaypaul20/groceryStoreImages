import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenWrapper} from '../../common/ScreenWrapper/ScreenWrapper';
import StoreList from './StoreList/StoreList';
import {StoreService} from '../../../services/stores.service';
import SearchBar from '../../common/SearchBar/SearchBar';
import Filters from './Filters/Filters';

const AllStores = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchStores()
  }, []);

  const fetchStores = async ()=>{
    const stores = await StoreService.getStoreList();
    setStores(stores);
  }

  return (
    <ScreenWrapper>
      <View style={{borderBottomWidth: 1, paddingBottom: 20}}>
        <Text style={{color: '#000', fontSize: 24}}>
          Hello <Text style={{fontWeight: '700'}}>User</Text>
        </Text>
      </View>
      <View style={{marginVertical:10, flexDirection:'row'}}>
        <View style={{width: '90%'}}><SearchBar /></View>
        <View style={{width: '10%'}}><Filters setStores={setStores} stores={stores}/>
          </View>
        
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{color: '#000', fontSize: 18, fontStyle: 'italic'}}>
          All Stores
        </Text>
      </View>
      <StoreList data={stores} />
    </ScreenWrapper>
  );
};

export default AllStores;
