// import { persistCombineReducers } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './userReducer';
// import assetsReducer from './assetsReducer';
// import vaultReducer from './vaultReducer';
// import swapReducer from './swapReducer';
// import walletsReducer from './walletsReducer';
// import dashboardReducer from './dashboardReducer';

// const persistConfig = {
//     key: 'login',
//     version: 1,
//     storage: AsyncStorage,
// };

export const rootReducer = {
    // assets: assetsReducer,
    user: userReducer,
    // vault: vaultReducer,
    // swapData: swapReducer,
    // wallet: walletsReducer,
    // dashboard: dashboardReducer,
};
// export type RootState = ReturnType<typeof rootReducer>;
