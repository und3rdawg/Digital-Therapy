import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const CreateNewPasswordScreen = () =>
{
  return (
    <View>

        <Text style={styles.passTextStyle}>Create New Password</Text>
        <View>

          <Text style={styles.belowTextStyling}>Please type in your new password below</Text>

        </View>
    </View>
  );
};

const styles=StyleSheet.create({

  passTextStyle:
  {
      marginHorizontal: 20,
      marginTop: 60,
      fontSize:30,
      fontWeight: 'bold',
      color:'red'
  },

  belowTextStyling:
  {
    marginTop:50,
    marginHorizontal:20,
    color:'grey',
    fontSize:13
  }


});

export default CreateNewPasswordScreen;
