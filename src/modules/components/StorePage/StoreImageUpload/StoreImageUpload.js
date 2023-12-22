import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Button from '../../../common/Button/Button';
import useStoreHook from '../../../../hooks/useStoreHook';

const StoreImageUpload = ({itemId}) => {
  const {images, clickPhoto, uploadPhoto, cloudImages, setItemId} =
    useStoreHook();

  useEffect(() => {
    setItemId(itemId);
  }, []);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Button title={'Click Photo'} onPress={clickPhoto} />

      <View style={{flexDirection: 'row', marginTop: 40}}>
        {images?.length
          ? images?.map(image => (
              <Image
                key={image.fileName}
                source={{uri: image.uri}}
                style={{width: 60, height: 120, margin: 5}}
              />
            ))
          : null}
      </View>
      {images?.length ? (
        <View style={{marginTop: 40}}>
          <Button
            title={'Upload Photos'}
            onPress={uploadPhoto}
            extraButtonStyle={{backgroundColor: '#4d4d4d'}}
            //   extraButtonTextStyle={{color: '#fff'}}
          />
        </View>
      ) : null}
      <Text style={{color: '#000'}}>Uploaded Images</Text>
      <View style={{flexDirection: 'row'}}>
        {cloudImages?.length
          ? cloudImages?.map(image => (
              <Image
                key={image.fileName}
                source={{uri: image.uri}}
                style={{width: 60, height: 120, margin: 5}}
              />
            ))
          : null}
      </View>
    </View>
  );
};

export default StoreImageUpload;
