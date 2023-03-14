import { createSlice ,PayloadAction} from "@reduxjs/toolkit"



export const PersonSlice = createSlice({
    name: "Person",
    initialState :{
        email : " ",
        password :" ",
        addtocart:0
    },
    reducers:{
        AddEmail:(state, action)=>{
            state.email= action.payload;
           
        },
        AddPassword:(state, action)=>{
            state.password=action.payload;
        },
        Addcart:(state, action)=>{
            state.addtocart=action.payload;
        }
    },
})
export default PersonSlice.reducer;
  
export const {AddEmail,AddPassword,Addcart} = PersonSlice.actions;
