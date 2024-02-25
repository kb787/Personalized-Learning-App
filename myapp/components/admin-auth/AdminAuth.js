import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' 
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'
 
const AdminAuth = () => {
  const [userEmail,setUserEmail] = useState('') ;
  const [userPassword,setUserPassword] = useState('') ;
  const navigation = useNavigation() ;

  const handleAdminAuthentication = async() => {
      try {
         const loginResponse = await axios.post("http://192.168.43.148:3500/admin/validate-admin", {
             userEmail:userEmail,
             userPassword:userPassword 
         }) 
         if((!userEmail) || (!userPassword)){
             Alert.alert('Entering all fields is mandatory') ;
         }
         if(loginResponse.data.success){
             Alert.alert('Login successfull') ;
         }
         else {
             Alert.alert('Invalid credentials for the admin') ; 
         }

      }
      catch(error){
           Alert.alert(` Unable to login due to error ${error}`) ; 
      }
  }
  return (
    <View style = {styles.pageContainer}>
        <View style = {styles.formContainer}>
           <View style = {styles.headingCollection}>
              <View style = {styles.fontIconContainer}> 
                <FontAwesomeIcon icon = {faUser} size={24} style={styles.fontIconStyling} />
              </View>  
             <Text style = {styles.headingText}>Login as an administrator</Text>
           </View>
            <TextInput style = {styles.textInputStyling} value = {userEmail} onChangeText={(text) => setUserEmail(text)} placeholder='Enter admin email-address'/>
            <TextInput style = {styles.textInputStyling} value = {userPassword} onChangeText={(text) => setUserPassword(text)}  placeholder='Enter admin password'/>
            <TouchableOpacity style = {styles.textButtonOuterStyling} onPress={handleAdminAuthentication}>
                <Text style = {styles.textButtonInnerStyling}>Login</Text>
            </TouchableOpacity>
            <Text style = {styles.bottomTextStyling}>
               Not an admin do the user registration
            </Text>
        </View>
    </View>
  )
}

export default AdminAuth ;

const styles = StyleSheet.create({
    pageContainer : {
       width:'100%',
       height:'100%',
       backgroundColor:'rgb(255 255 255)'
    } ,
    formContainer : {
       marginLeft:'8%',
       marginRight:'8%',
       marginBottom:'8%',
       marginTop:'8%',
       backgroundColor:'rgb(203 213 225)',
       borderRadius:9, 
    } ,
    headingCollection : {
       display:'flex',
       justifyContent:'center',
       padding:'5%', 
       flexDirection:'row',
       gap:8  
    } ,
    headingText : {
      fontSize:18,
      paddingTop:1
    } ,
    fontIconContainer : {
      borderColor:'black',
      borderWidth:2,
      padding:5,
      borderRadius:50 
    } ,
    textInputStyling : {
      display:'flex',
      width:'75%',
      height:'13%',
      marginLeft:'12%',
      justifyContent:'center',
      marginTop:'5%',
      borderColor:'black',
      borderWidth:4,
      borderRadius:6,
      textAlign:'center'
    },
    textButtonOuterStyling : {
       backgroundColor:'rgb(14 165 233)',
       color:'white',
       width:'75%',
       height:'12%',
       marginLeft:'12%',
       marginTop:'5%',
       borderRadius:8 
    } ,
    textButtonInnerStyling : {
       textAlign:'center',
       fontSize:18,
       paddingTop:8,
       color:'white'
    },
    bottomTextStyling : {
      fontSize:15,
      textAlign:'center',
      marginTop:'7%'
    }    


})