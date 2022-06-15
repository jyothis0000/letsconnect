import { Formik } from 'formik';
import React,{useContext,useState} from 'react';
import { View, StyleSheet,Text,Button,ScrollView} from 'react-native';
import AppText from '../App/components/Apptext';
import AppTextInput from '../App/components/AppTextInput'
import SubmitButton from '../App/components/SubmitButton';
import * as yup from 'yup'
import AppButton from '../App/components/AppButton';
import colors from '../App/config/colors';

import userApi from "../App/Api/users";
import useAuth from '../App/Auth/useAuth';

import authApi from '../App/Auth/useAuth';

import jwtDecode from "jwt-decode";
import AuthContext from "../App/Auth/context";
const loginValidationSchema =yup.object().shape ({ 
 name:yup
    .string()
   
    .required('name is Required')
   ,
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required')
    .matches("@gmail.com"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    
    .required('Password is required'),
    confirmPassword: yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([yup.ref('password')]) : field
  ),
})


function RegisterScreen({navigation}) {

  const authContext=useContext(AuthContext)
  const auth = useAuth();


 const [error, setError] = useState();



  const handleSubmit=async(userInfo)=>{
    const result =await userApi.register(userInfo)
if (!result.ok) {
  if (result.data) {
    setError(result.data.error)
  }
  else{
    console.log(result)
  }
  setTimeout(() => {
    setError('')
  }, 3000);
  return;
}

const reg=await authApi.Login(userInfo.email,userInfo.password)

if (reg.ok) {

  console.log(reg.data)
  const user=jwtDecode(reg.data)
authContext.setUser(user);
}
  }





  return (

    <View style={styles.container}>
<Text style={styles.text}> Letz Connect</Text>
<Formik 
initialValues={handleSubmit}
onSubmit={values=>console.log(values)}
validationSchema={loginValidationSchema} >
 {({handleChange, handleBlur, handleSubmit,values,errors,isValid,touched,setFieldTouched})=>(
       <>
       <View style={styles.APP}>
       <AppText style={styles.addtext}>USER NAME </AppText>
<AppTextInput placeholder="NAME"

autoCorrect={false}
onChangeText={handleChange("name")}>
</AppTextInput>
{(errors.name && touched.name) &&
                  <Text style={styles.errorText}>{errors.name}</Text>}
         <AppText style={styles.addtext}>EMAIL</AppText>
<AppTextInput placeholder="Email" keyboardType="email-address"

autoCorrect={false}
onChangeText={handleChange("email")}>
</AppTextInput>
{(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>}
                    <AppText style={styles.addtext}>PASSWORD</AppText>
                  <AppTextInput placeholder="password" keyboardType="default"

autoCorrect={false} 
secureTextEntry={true}
onChangeText={handleChange("password")}
onBlur= { ()=>setFieldTouched("password")}>
 
</AppTextInput>
{(errors.password && touched.password) &&

                  <Text style={styles.errorText}>{errors.password}</Text>}

<AppText style={styles.addtext}>CONFIRM PASSWORD</AppText>
                  <AppTextInput placeholder="password" keyboardType="default"

autoCorrect={false} 
secureTextEntry={true}
onChangeText={handleChange("password")}
onBlur= { ()=>setFieldTouched("password")}>
 
</AppTextInput>
{(errors.confirmpassword && touched.confirmpassword) &&

                  <Text style={styles.errorText}>{errors.confirmpassword}</Text>}         
                  


<AppButton title="Adddetails" color="#E5E5E5" mypress={() =>navigation.push('AddDetails')}></AppButton>
</View>
       </>
          )}
</Formik>
<Text style={styles.add}> NEW USER AGREED FOR THE TERMS AND CONDITIONS</Text>
    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E5E5E5",
    flex:1,
    top:5,

  },
  text:{
    fontSize:35,
    color:"blue",
    justifyContent:"center",
    alignSelf:"center",
    top:40
  },
  APP:{
    top:60,
width:"100%",
height:70,



  },
  errorText:{
    color:"red",
    fontSize:15,
    fontWeight:"bold"
},
add:{
  justifyContent:"center",
  alignSelf:"center",
  fontSize:10,
  top:580

},addtext:{
  fontSize:15,
 left:30
},
button:{
  backgroundColor:colors.buttoncolor,
  marginVertical:10,
  borderWidth:2.8,
  borderColor:"#B4B4B4",
  borderRadius:5

}

});

export default RegisterScreen;