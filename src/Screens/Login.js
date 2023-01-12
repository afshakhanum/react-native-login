import React from 'react'
import { View,Text,StyleSheet,ScrollView,TextInput,Image, ImageBackground, TouchableOpacity} from 'react-native'


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

const Login =  ({navigation, route})  => {
  return (
    <View>
    <ImageBackground source={require('./Images/login.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.loginContainer} >
      <Text style={styles.loginHead}>Login</Text>
      </View>
      <View style={styles.containerWrapper}>
      <View style={styles.loginInputContainer} >
      <Text style={styles.inputLabel}>Name</Text>
      <TextInput style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="alphabet"
      />
      <Text style={styles.inputLabel}>Email</Text>
      <TextInput style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="alphabet"
      />
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.loginForgot}>Forgot Your Password?</Text>
      <View style={styles.socialMedia}>
      <TouchableOpacity style={styles.loginBtnsocial}>
        <Image style={styles.logos} source={require('./Images/google.png')} />
        <Text style={styles.socialText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtnsocial}>
      <Image style={styles.logos} source={require('./Images/facebook-app.png')} />
      <Text style={styles.socialText}>Login with Facebook</Text>
      </TouchableOpacity>
      <View style={styles.signUpText}>
      <Text style={styles.newAccount}>Don't have account?</Text>
      <Text style={styles.signUp}>Sign Up</Text>
      </View>
      </View>
      </View>
      </View>

 </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    image :{
      width:'100%',
      height:'100%',
     },
     loginHead:{
      fontSize:40,
      color:'black',
      fontWeight:'bold',
      textAlign:'center',
      marginTop: 20,
     },
     loginContainer:{
      width: "100%", 
      height: 90 , 
      backgroundColor: '#e4c699', 
      borderBottomLeftRadius: 15,
      borderBottomRightRadius:15,
     },
     containerWrapper:{
       width:'100%',
       height:'85%',
       justifyContent:'center',
       alignItems:'center',
     },
     loginInputContainer :{
      width: "80%", 
      height: '85%', 
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 20,
      alignItems:'center',
      paddingHorizontal: 20,
      paddingVertical:80,
     },
     inputLabel:{
       width:'92%',
       color: 'black',
       textAlign: 'left',
       marginBottom: 10,
     },
     input:{
      height: 40,
      width: '90%',
      padding: 20,
      backgroundColor:"rgba(201, 170, 122,0.4)",
      marginBottom: 15,
      borderRadius:10,
     },
     loginBtn:{
      marginTop:20,
      borderRadius:10,
      backgroundColor:'black',
     },
     btnText:{
      color:'white',
      paddingHorizontal:25,
      paddingVertical:10,
      fontWeight: 'bold',
      fontSize: 18,
     },
     loginForgot:{
       marginTop:10,
       color:'black',
     },
     logos:{
      width:20,
      height:20,
      marginRight:10,
     },
     loginBtnsocial:{
      backgroundColor: '#b49389',
      paddingHorizontal:40,
      paddingVertical:5,
      marginTop:10,
      display:'flex',
      flexDirection: 'row',
      borderRadius:10,
     },
     socialText:{
      color:'white',
      fontFamily:'bold',
      fontSize:15,
     },
     socialMedia:{
      marginTop:120,
     },
     signUpText:{
      width:"80%",
      display:'flex',
      flexDirection:"row",
      justifyContent:"center",
      marginTop:10,
     },
     newAccount:{
      // color:'black',
     },
     signUp:{
      color:"black",
     }
  });
  
export default Login