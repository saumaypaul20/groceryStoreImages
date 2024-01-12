import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {ScreenWrapper} from '../../common/ScreenWrapper/ScreenWrapper';
import StoreList from './StoreList/StoreList';
import {StoreService} from '../../../services/stores.service';
import SearchBar from '../../common/SearchBar/SearchBar';
import Filters from './Filters/Filters';
import Logout from '../Logout/Logout';

const AllStores = () => {
  const [stores, setStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    const stores = await StoreService.getStoreList();
    setStores(stores);
  };

  const searchedList = useCallback(() => {
    if (!searchTerm?.length) return stores;
  
    const searchTermLower = searchTerm.toLowerCase();
    return stores.filter((store) => {
      return Object.values(store).some((value) => {
        return typeof value === 'string' && value.toLowerCase().includes(searchTermLower);
      });
    });
  }, [searchTerm, stores])

  return (
    <ScreenWrapper>
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#000', fontSize: 24}}>
          Hello <Text style={{fontWeight: '700'}}>User</Text>
        </Text>
        <Logout />
      </View>
      <View style={{marginVertical:10, flexDirection:'row'}}>
        <View style={{width: '90%'}}>
          <SearchBar setSearchTerm={setSearchTerm} />
        </View>
        <View style={{width: '10%'}}>
          <Filters setStores={setStores} stores={stores} />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{color: '#000', fontSize: 18, fontStyle: 'italic'}}>
          All Stores
        </Text>
      </View>
      <StoreList data={searchedList()} />
    </ScreenWrapper>
  );
};

export default AllStores;
