import { configureStore } from "@reduxjs/toolkit";
import offerSlice from './offerSlice'
import userSlice from './usersSlice'

export const store = configureStore({
reducer:{
    offer: offerSlice,
    users: userSlice
}
})


