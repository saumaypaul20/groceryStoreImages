import {createSlice} from '@reduxjs/toolkit';;
// import type {PayloadAction} from '@reduxjs/toolkit';;
// import type { RootState } from '../store'
// import { IUserDataInfo } from '@src/modules/common/types'

const initialState = {
  loggedIn: false,
  username: undefined,
  id: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return action.payload;;
    },
    resetUserState() {
      return {...initialState};;
    }
  },
});

export const {setUserData, resetUserState} = userSlice.actions;;
export default userSlice.reducer
