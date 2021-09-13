import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const ForgotScreen = () => {
  return (
    <View>

        <Text style={styles.fStyle}> Forgot Password? </Text>

        <View>
            <Text style={styles.textStyle}>If you need any help resetting your {"\n"}password, we can help by sending you a {"\n"}code to reset it.</Text>
        </View>

        <View>
            <Icon style={styles.emailIconStyle} name="email" size={18} color="grey" />
            <View style={styles.emailStyle}>
            <TextInput
            style={styles.emailTextStyle}
            placeholder='E-Mail'
            />
            </View>
        </View>
        <View style={styles.signInBackground}>
        <TouchableOpacity style={styles.signInTextBackground} onPress={() => navigation.navigate()} >

        <Text style={styles.signInColorTextBackground}> SENT </Text>

        </TouchableOpacity>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({

  fStyle:
  {
    marginHorizontal: 15,
    top: 70,
    color:'red',
    fontSize:30,
    fontWeight: 'bold'
  },

  textStyle:
  {
    marginTop:100,
    marginHorizontal: 22,
    color:'grey'
  },

  emailStyle:
  {
    top: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
    margin: 39
  },

  emailIconStyle:
  {
    top: 100,
    marginHorizontal:40
  },

  emailTextStyle:
  {
    fontSize:16,
    marginHorizontal:50,
    bottom:10
  },

  signInBackground:
  {
    marginTop: 75,
    backgroundColor: 'red',
    height: 45,
    borderRadius: 6,
    marginHorizontal: 39,
  },

  signInTextBackground:
  {
    top:10,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  signInColorTextBackground:
  {
    fontSize:20,
    color: 'white',
    fontWeight:'bold'
  }


});

export default ForgotScreen;
