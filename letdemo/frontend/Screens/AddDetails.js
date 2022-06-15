import React from 'react';
import { View, StyleSheet,Button,Text,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppText from '../App/components/Apptext';
import AppTextInput from '../App/components/AppTextInput';
import Slide from '../App/components/Slide';
import colors from '../App/config/colors';
import { Formik } from 'formik';
import  * as  yup from 'yup';
const AddValidationSchema =yup.object().shape ({ 
university: yup
    .string()
 
    .required('university is Required')
  ,
  Degree: yup
    .string()
 
    .required('university is Required')
  ,
  Field: yup
    .string()
 
    .required('university is Required')
  ,
grade: yup
    .string()
 
    .required('university is Required')
  ,
Activities: yup
    .string()
 
    .required('university is Required')
  ,
 Startyear: yup
    .number()
 
    .required('university is Required')
  ,
 endyear: yup
  .number()

  .required('university is Required')
,
description: yup
.number()

.required('university is Required')
,
  
  
})
function AddDetails({navigation}) {
  return (
    
    <View style={styles.container}>


      <Formik 
      initialValues={{university:"",Degree:"",Field:"",grade:"",Activities:"",Startyear:"",endyear:"",description:""}}
      onSubmit={values=>console.log(values)}
      validationSchema={AddValidationSchema}
      >
      {({handleChange, handleBlur, handleSubmit,values,errors,isValid,touched,setFieldTouched})=>(
       <>

<ScrollView>
  <Text> Insitution/ university </Text> 
<AppTextInput placeholder="Add education(eg: MCA) ">
    

</AppTextInput>
<Text> DEGREE </Text> 
<AppTextInput placeholder="Add education(eg: MCA) ">

</AppTextInput>
<Text>FIELD OF STUDY </Text> 
<AppTextInput placeholder="Add education(eg: MCA) " />
<Text>GRADE </Text> 
<AppTextInput placeholder="Add education(eg: MCA) " />
<Text>ACTIVITIES </Text> 
<AppTextInput placeholder="Add education(eg: PLACEMENT, SPORTS) " />

 <View style={styles.extra}>
<Text >START YEAR</Text> 
<TextInput keyboardType="numeric"  style={styles.container1}/>
<Text style={styles.create}>END YEAR</Text> 
<TextInput keyboardType="numeric" style={styles.container1} />
</View> 

<Text>DESCRIPTION</Text> 
<AppTextInput placeholder="OPTIONAL" />
<Slide name="chevron-right" size={20} color="black" onPress={()=>navigation.navigate('signin')} ></Slide>
</ScrollView> 


       </>
      )}

      </Formik>

{/* <ScrollView>

  
        <Text> Insitution/ university </Text> 
<AppTextInput placeholder="Add education(eg: MCA) ">
    

</AppTextInput>
<Text> DEGREE </Text> 
<AppTextInput placeholder="Add education(eg: MCA) ">

</AppTextInput>
<Text>FIELD OF STUDY </Text> 
<AppTextInput placeholder="Add education(eg: MCA) " />
<Text>GRADE </Text> 
<AppTextInput placeholder="Add education(eg: MCA) " />
<Text>ACTIVITIES </Text> 
<AppTextInput placeholder="Add education(eg: PLACEMENT, SPORTS) " />

 <View style={styles.extra}>
<Text >START YEAR</Text> 
<TextInput keyboardType="numeric"  style={styles.container1}/>
<Text style={styles.create}>END YEAR</Text> 
<TextInput keyboardType="numeric" style={styles.container1} />
</View> 

<Text>DESCRIPTION</Text> 
<AppTextInput placeholder="OPTIONAL" />
<Slide name="chevron-right" size={20} color="black" onPress={()=>navigation.navigate('signin')} ></Slide>
</ScrollView> */}
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E5E5E5",
    flex:1,
   
  },
  extra:{


    flexDirection:"row",
      height:40,
      width:"50%"
},
extras:{
 justifyContent: 'space-between', marginHorizontal: 20, 
},
row: {
  flex: 1,
  flexDirection: "row"
},
inputWrap: {
  flex: 1,

  borderBottomWidth: 1,
  marginBottom: 10
},
inputdate: {
  fontSize: 14,
  marginBottom: -12,
 
},
inputcvv: {
  fontSize: 14,
  marginBottom: -12,

},create:{

left:15,
padding:10
  
 
 
},

container1:{
           
  backgroundColor:colors.buttoncolor,

  flexDirection:"row",
  width:"45%",
  padding:15,

borderWidth:1.5,
borderColor:"#B4B4B4",
left:18,


     },icon:{
marginRight:10
     },
    text:{
        height:30,
        width:"100%",
        backgroundColor:"white",
        borderWidth:5,
        color:colors.text,
        borderColor:"#B4B4B4"
    }
});

export default AddDetails;