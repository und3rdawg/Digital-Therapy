import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';



const SigninScreen = ( {navigation}) => {
  return (
    <View>
      <View style={styles.bstyle} >
      <Button
        style={styles.buttonTextstyle}
        title="Forgot Password ?"
        color="grey"
        onPress={() => navigation.navigate('Forgot')}
      />
      </View>

        <Text style={styles.tstyle}> SIGN IN </Text>

        <View style={styles.estyle}>
        <Entypo style={styles.iistyle} name="email" size={15} color="grey" />
        <TextInput
            style={styles.pstyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="E-Mail"
            />
            </View>

      <View style={styles.eestyle}>
      <Entypo style={styles.istyle} name="lock" size={15} color="grey" />
      <Entypo style={styles.eyestyle} name="eye" size={20} color="grey"  />
        <TextInput
            style={styles.ppstyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry={true}
          />
      </View>

          <View style={styles.backgroundstyle}>
          <TouchableOpacity style={styles.buttonTextstyle} onPress={() => navigation.navigate('Forgot')} >

          <Text style={styles.buttonSecStyle}> SIGN IN</Text>

          </TouchableOpacity>
          </View>

          <Text style={styles.connTextStyle}> Or Connect With </Text>
          <View style={styles.iconStyle}>
            <AntDesign name="apple1" size={25} color='grey' />
            <AntDesign name="google" size={25} color='grey' />
            <AntDesign name="facebook-square" size={25} color='grey' />
          </View>

          <View style={styles.signupStyle}>
          <Text style={styles.singupButtonStyle} > Don't have an account?
          <TouchableOpacity onPress={() => navigation.navigate('Signup')} >

          <Text style={styles.signupDoubleButtonStyling}> Sign Up</Text>

          </TouchableOpacity>
           </Text>
           </View>
    </View>
  );
};

const styles = StyleSheet.create({

  tstyle: {

    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 30,
    left: 32
  },
  estyle: {

    top: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.8,
    margin: 39

  },

  eestyle:
  {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.8,
    margin: 39,
    top: 8,
  },

  iistyle:
  {
    top:3,
    left:5
  },


  istyle:
  {
    top: 15,
    left: 5,
  },

  pstyle:
  {
    left: 30,
    bottom: 15
  },

  ppstyle:
  {
    left:30,
    bottom: 20
  },

  eyestyle:
  {
    left: 290
  },

  bstyle:
  {
    alignItems: 'flex-end',
    right: 30,
    top: 330
  },

  socialstyle:
  {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  backgroundstyle: {

    marginTop: 30,
    backgroundColor: 'red',
    height: 45,
    borderRadius: 6,
    marginHorizontal: 39,
  },

  buttonTextstyle:
  {
    flexDirection: 'row',
    alignSelf: 'center',
    right: 10,
    top: 8
  },
  buttonSecStyle:
  {
    fontSize:20,
    color: 'white',
    fontWeight:'bold'
  },

  iconStyle:
  {
    marginTop: 150,
    marginHorizontal: 150,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },

  connTextStyle:
  {

    fontSize:10,
    top:130,
    left:150,
    flexDirection:'row',
    color: '#a9a9a9'

  },

  signupStyle:
  {
    top:20,
    flexDirection:'row',
    justifyContent:'center'
  },

  singupButtonStyle:
  {
    top:50,
    color:'grey',
    fontSize: 15
  },

  signupDoubleButtonStyling:
  {
    top:1,
    fontWeight:'bold',
    color:'red'
  }


});

export default SigninScreen;
