import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OTPScreen = ( {navigation} ) => {
  return (
    <View>


          <Text style={styles.forgotStyling}>Please Enter {"\n"}
           The Code </Text>

           <View>
           <OTPInputView
           style={{width: '80%', height: 200}}
           pinCount={4}
           codeInputFieldStyle={styles.underlineStyleBase}
           />
           </View>

            <TouchableOpacity style={styles.continueTextButtonStyle}   onPress={() => navigation.navigate('Forgot')}>
            <Text style={styles.continueTextColor}> CONTINUE </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={styles.resendCodeStyling}>Resend Code</Text>
            </TouchableOpacity>


    </View>

  );
};

const styles = StyleSheet.create({

  forgotStyling:
  {
    marginHorizontal:20,
    marginTop:50,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',

  },
  underlineStyleBase: {

  left:35,
   width: 35,
   height: 45,
   borderBottomColor: 'black',
   borderWidth: 0,
   borderBottomWidth: 3,
 },

 continueTextButtonStyle:

 {

   backgroundColor: 'red',
   height: 45,
   borderRadius: 5,
   margin:30,
   bottom:30
 },

 continueTextColor:
 {
   fontSize:20,
   color: 'white',
   fontWeight:'bold',
   flexDirection: 'row',
   alignSelf: 'center',
   right:10,
   top:10
 },

 resendCodeStyling:
 {
   fontSize:15,
   fontWeight:'bold',
   color:'red',
   flexDirection: 'row',
   alignSelf: 'center',
 }


});

export default OTPScreen;
