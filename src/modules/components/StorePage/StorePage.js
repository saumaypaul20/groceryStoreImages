import React from 'react';
import {ScreenWrapper} from '../../common/ScreenWrapper/ScreenWrapper';
import {useRoute} from '@react-navigation/native';
import StoreInfo from './StoreInfo/StoreInfo';
import StoreImageUpload from './StoreImageUpload/StoreImageUpload';

const StorePage = () => {
  const {params} = useRoute();
  const {item} = params;


  return (
    <ScreenWrapper>
      <StoreInfo item={item} />

      <StoreImageUpload itemId={item.id} />
    </ScreenWrapper>
  );
};

export default StorePage;
