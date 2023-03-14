import { configureStore } from "@reduxjs/toolkit";
//import { useDispatch } from "react-redux";
import { PersonSlice } from "./Info";

const Store = configureStore({
    reducer: {
        EmailId : PersonSlice.reducer,
        Cart : PersonSlice.reducer
    }
})
export default Store;
