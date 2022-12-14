import { createSlice } from "@reduxjs/toolkit";
import detailslist from '..//..//details.json'

export const sampleSlice = createSlice({
    
    name:"sample",
    initialState:{
        isAuthentication: JSON.parse(localStorage.getItem("isAuthentication")) || false,
        loginAuthentication: JSON.parse(localStorage.getItem("loginAuthentication")) || false,
        details:detailslist,
    },
    reducers:{
        isAuthentication:(state , action)=>{
            state.isAuthentication = true
        },
        loginAuthentication:(state , action)=>{
            state.loginAuthentication = true
        },
        logoutAuthentication:(state , action)=>{
            state.loginAuthentication = false
        },
        uploadDetails:(state , action)=>{
            state.details.push({username:localStorage.getItem('username'),
            mailid:localStorage.getItem('mailid'),
            address:localStorage.getItem('address'),
            number:localStorage.getItem('number'),
            gender:localStorage.getItem('gender'),    
            dob:localStorage.getItem('dob'),   
            pincode:localStorage.getItem('pincode')    
            })
        }

    }
})

export default sampleSlice.reducer
export const { isAuthentication , loginAuthentication , uploadDetails , logoutAuthentication} = sampleSlice.actions