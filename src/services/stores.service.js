import firestore from '@react-native-firebase/firestore';

export const StoreService = {
  getStoreList: async () => {
    const storesCollection = firestore().collection('stores');
    const storesDocs = await storesCollection.get();
    const stores = storesDocs.docs.map(doc => {
      const id = doc.id;
      const item = doc.data();
      return {...item, id};
    });
    return stores;
  },
  uploadStoreImages: async (store_id, file_uri) => {
    const storesImagesCollection = firestore().collection('images');
    return storesImagesCollection
      .add({
        store_id,
        uri: file_uri,
      })
      .then(response => {
        return response;
      })
      .catch(err => err.message);
  },
  getStoreImages: async store_id => {
    const storesImagesCollection = firestore().collection('images');
    const storesImageDocs = await storesImagesCollection
      .where('store_id', '==', store_id)
      .get();
    const storeImages = storesImageDocs.docs.map(doc => {
      const id = doc.id;
      const item = doc.data();
      return {...item, id};
    });
    return storeImages;
  },
  getStoreFilters: async store_id => {
    const filtersCollection = firestore().collection('filters');
    const filtersCollectionDocs = await filtersCollection.get();
    const filters = filtersCollectionDocs.docs.map(doc => {
      // const id = doc.id;
      const item = doc.data();
      console.log("🚀 ~ file: stores.service.js ~ line 46 ~ item", item)
      return item
    });
    return filters;
  },
  // addFilters: async (data) => {
  //   const filters = FILTERS;
  //   const filtersAdded ={}
  //   for (const filter of filters) {
  //     let filterData = data.map(item => item[filter]);
  //     filterData = uniq(filterData);
      
  //      const _tempF = filterData.map(item=>{
  //       return item;
       
  //     });
  //     filtersAdded[filter] = _tempF
  //   }
  //   console.log('filtersAdded',filtersAdded)
  //    const createFilter = firestore().collection('filters');
  //       return createFilter
  //         .add(filtersAdded)
  //         .then(response => {
  //         console.log("🚀 ~ file: stores.service.js ~ line 58 ~ addFilters: ~ response", response)
  //           return response;
  //         })
  //         .catch(err => err.message);

  //   // return filtersAdded
  // },
};
