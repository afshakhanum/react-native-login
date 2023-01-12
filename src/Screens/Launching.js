import { ImageBackground, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Launching = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./Images/launching.png')} resizeMode="cover" style={styles.image}>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>
    </ImageBackground>
    </View>
  )
}

export default Launching

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //   },    
    image :{
     width:'100%',
     height:'100%',
    //  flex: 1,
     justifyContent: 'flex-end',
     alignItems: 'center',
    //  paddingBottom:30,
    },
    button:{
        marginBottom:40,
        backgroundColor: 'white',
        width: 260,
        paddingHorizontal:25,
        paddingVertical:15,
        borderRadius:10,
    },
    buttonText :{
        textAlign: 'center',
        color: 'black',
    }
})