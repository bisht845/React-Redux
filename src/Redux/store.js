import { configureStore } from "@reduxjs/toolkit";
import offerSlice from './offerSlice'

export const store = configureStore({
reducer:{
    offer: offerSlice
}
})


