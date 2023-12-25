import {View, Text, StyleSheet, Modal, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Checkbox, Button, PaperProvider} from 'react-native-paper';
import {StoreService} from '../../../../services/stores.service';
import {FILTERS} from '../../../../utils/constants';
import firestore from '@react-native-firebase/firestore';
import { IconButton, MD3Colors } from 'react-native-paper';
const Filters = ({stores, setStores}) => {
  const [visible, setVisible] = React.useState(false);
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {margin: 20};

  const [selectedFilters, setSelectedFilters] = useState({});

  const clearFiltersAndHide = async () => {
    setSelectedFilters({});
    await fetchStores();
    hideModal();
  };

  const fetchStores = async () => {
    try {
      setLoading(true);
      let query = firestore().collection('stores');

      // Apply filters to the query
      Object.entries(selectedFilters).forEach(([filterKey, filterValues]) => {
        query = query.where(
          filterKey,
          'in',
          Object.keys(filterValues).filter(value => filterValues[value]),
        );
      });

      const snapshot = await query.get();
      const storeList = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      setStores(storeList);
    } catch (error) {
      console.error('Error fetching stores:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filterKey, value) => {
    setSelectedFilters(prevFilters => {
      const updatedFilters = {
        ...prevFilters,
        [filterKey]: {
          ...(prevFilters[filterKey] || {}),
          [value]: !prevFilters[filterKey]?.[value],
        },
      };

      // Remove the filterKey if all values are unchecked
      if (
        !Object.values(updatedFilters[filterKey]).some(isChecked => isChecked)
      ) {
        delete updatedFilters[filterKey];
      }

      return updatedFilters;
    });
  };

  const applyAndhideModal = async () => {
    await fetchStores(selectedFilters);
    hideModal();
  };

  useEffect(() => {
    (async () => {
      const filters = await StoreService.getStoreFilters();
      setFilters(filters[0]);
    })();
  }, []);

  return (
    <>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        {loading ? (
          <View
            style={{
              flex: 1, 
              justifyContent:'center',
              alignItems: 'center',
              position:'absolute',
              top:0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: '#fff',
              zIndex:100,
            }}>
            <ActivityIndicator color={'#000'} />
            <Text style={{color:"#000"}}>Fetching List...</Text>
          </View>
        ) : null}
        <View style={{padding: 20, flex: 1}}>
          <Text
            style={{
              ...styles.filterHeading,
              fontSize: 20,
              paddingBottom: 15,
              borderBottomWidth: 3,
            }}>
            FILTERS
          </Text>
          {Object.keys(selectedFilters)?.length ? (
            <Button style={{marginTop: 10}} onPress={clearFiltersAndHide}>
              Clear All
            </Button>
          ) : null}
          <ScrollView style={{flex: 1}}>
            <View style={styles.filterContainer}>
              {filters &&
                FILTERS.map(filterKey => {
                  const values = filters[filterKey]; // Get the value for the current filterKey
                  return (
                    <View key={filterKey} style={{marginBottom: 10}}>
                      <Text style={styles.filterHeading}>
                        {filterKey.toUpperCase()}
                      </Text>
                      {values?.map(value => (
                        <Checkbox.Item
                          label={value}
                          status={
                            selectedFilters[filterKey]?.[value]
                              ? 'checked'
                              : 'unchecked'
                          }
                          onPress={() => handleFilterChange(filterKey, value)}
                        />
                      ))}
                    </View>
                  );
                })}
            </View>
          </ScrollView>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button style={{marginTop: 30}} onPress={hideModal}>
              Cancel
            </Button>
            <Button style={{marginTop: 30}} onPress={applyAndhideModal}>
              Apply
            </Button>
          </View>
        </View>
      </Modal>

      <IconButton
        icon="filter"
        iconColor={MD3Colors.error50}
        size={24}
        onPress={showModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterContainer: {
    marginBottom: 10,
    flex: 1,
  },
  filterHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  filterButton: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#000',
  },
  selectedFilter: {
    backgroundColor: 'lightblue',
  },
});

export default Filters;
