import * as Securestore from     'expo-secure-store';

import jwtDecode from 'jwt-decode'
const storeToken=async(authToken)=>{
    try {
        await Securestore.setItemAsync("Auth-Token",authToken)
        console.log("stored");
    } catch (error) {
        console.log("eroor in storing dat",error);
    }
}


const getToken=()=>{
    try {
        console.log('getting');
        return Securestore.getItemAsync("Auth-Token")
      
   } catch (error) {
       console.log('Error in storing token',error);
   }
}


const getUser=async()=>{
    const token= await getToken()
    if(token) return jwtDecode(token)
    return null;
}
const removeToken=async(authToken)=>{
    try {
        await Securestore.deleteItemAsync("Auth-Token")
       
    } catch (error) {
        console.log("eroor in storing dat",error);
    }
}

export default{storeToken,removeToken,getToken,getToken};