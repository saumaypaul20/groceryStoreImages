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
};
