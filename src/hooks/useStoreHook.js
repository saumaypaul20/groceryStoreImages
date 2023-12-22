// StorePageLogic.js

import {useEffect, useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {StoreService} from '../services/stores.service';

const useStoreHook = () => {
  const [images, setImages] = useState([]);
  const [cloudImages, setCloudImages] = useState([]);
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    if (!itemId) return;
    fetchCloudImages(itemId);
  }, [itemId]);

  const cameraOptions = {
    quality: 0.1,
  };

  const fetchCloudImages = async store_id => {
    const cloudImagesRes = await StoreService.getStoreImages(store_id);
    setCloudImages(cloudImagesRes);
  };

  const clickPhoto = () => {
    launchCamera(cameraOptions)
      .then(res => {
        if (!res.assets) {
          return;
        }
        setImages(prev => [...prev, ...res.assets]);
      })
      .catch(err => console.log(err));
  };

  const uploadPhoto = async () => {
    //upload logic
    console.log('upload start');
    if (!images?.length) return;

    for (const image of images) {
      const reference = storage().ref(`images/${image.uri.split('/').pop()}`);
      const pathToFile = image.uri;
      const task = reference.putFile(pathToFile);

      task.then(() => {
        console.log('Image uploaded to the bucket!');
      });

      try {
        // Wait for the upload task to complete
        await task;

        console.log('Image uploaded to the bucket!');

        // Get the download URL after the upload is completed
        const download_url = await reference.getDownloadURL();
        setCloudImages(prev => [...prev, {...image, uri: download_url}]);
        setImages(prev => prev.filter(img => img.uri !== image.uri));
        await StoreService.uploadStoreImages(itemId, download_url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return {
    images,
    cloudImages,
    clickPhoto,
    uploadPhoto,
    setCloudImages,
    setItemId
  };
};

export default useStoreHook;
