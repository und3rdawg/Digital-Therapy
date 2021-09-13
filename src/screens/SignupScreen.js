import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';



const SignupScreen = ( {navigation}) => {
  return (
    <View>
        <Text style={styles.signUpbackgroundstyle}>SIGN UP</Text>

        <View style={styles.signUPButtonStyle}>

        <TouchableOpacity style={styles.signUPredbarTextStyling} onPress={() => navigation.navigate('Forgot')} >
        <Text style={styles.signUPButtonTextStyle}> SIGN UP</Text>
        </TouchableOpacity>

        </View>

        <View style={styles.signUPViewStyle}>

            <View style={styles.textinputOnestyle}>
            <Ionicons style={styles.iconStyling}name="person-circle-outline" size={20} color='grey' />
            <TextInput
            style={styles.textPlaceHolderTextStyling}
            placeholder='Name'
            />
            </View>

            <View style={styles.textinputTwostyle}>
            <Ionicons style={styles.iconStyling}name="person-circle-outline" size={20} color='grey' />
            <TextInput
            style={styles.textPlaceHolderTextStyling}
            placeholder='Last Name'
            />
            </View>


            <View style={styles.textinputThreestyle}>
            <Ionicons style={styles.iconStyling}name="person-circle-outline" size={20} color='grey' />
            <TextInput
            style={styles.textPlaceHolderTextStyling}
            placeholder='Age'
            />
            </View>


            <View style={styles.textinputFourstyle}>
            <Entypo style={styles.iconStyling}name="email" size={20} color='grey' />
            <TextInput
            style={styles.textPlaceHolderTextStyling}
            placeholder='E-Mail'
            />
            </View>

            <View style={styles.textinputFivestyle}>
            <Ionicons style={styles.iconStyling}name="location-outline" size={20} color='grey' />
            <TextInput
            style={styles.textPlaceHolderTextStyling}
            placeholder='Location'
            />
            </View>


            <View  style={styles.textinputSixstyle}>
            <Entypo style={styles.iconStyling}name="lock" size={20} color='grey' />
            <TextInput
            style={styles.textPlaceHolderTextStyling}
            placeholder='Password'
            />
            </View>


            <View style={styles.textinputSevenstyle}>
            <Entypo style={styles.iconStyling}name="lock" size={20} color='grey' />
            <TextInput
            style={styles.textPlaceHolderTextStyling}
            placeholder='Confirm Password'
            />
            </View>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({

signUpbackgroundstyle:
{
  marginHorizontal:40,
  marginTop:50,
  fontSize: 35,
  fontWeight: 'bold',
  color:'red'
},

textinputOnestyle:
{

  borderBottomColor: 'grey',
  borderBottomWidth: 0.8,
  margin: 39
},
textinputTwostyle:
{
  bottom:65,
  borderBottomColor: 'grey',
  borderBottomWidth: 0.8,
  margin: 39
},
textinputThreestyle:
{
  bottom:130,
  borderBottomColor: 'grey',
  borderBottomWidth: 0.8,
  margin: 39
},

textinputFourstyle:
{
  bottom:195,
  borderBottomColor: 'grey',
  borderBottomWidth: 0.8,
  margin: 39
},

textinputFivestyle:
{
  bottom:255,
  borderBottomColor: 'grey',
  borderBottomWidth: 0.8,
  margin: 39
},

textinputSixstyle:
{
  bottom:315,
  borderBottomColor: 'grey',
  borderBottomWidth: 0.8,
  margin: 39
},
textinputSevenstyle:
{
  bottom:375,
  borderBottomColor: 'grey',
  borderBottomWidth: 0.8,
  margin: 39
},

textPlaceHolderTextStyling:
{
  left:35,
  bottom:9
},

iconStyling:
{
  top:10
},

signUPButtonStyle:
{
  top:450,
  backgroundColor: 'red',
  height: 45,
  borderRadius: 6,
  margin:30
},

signUPViewStyle:
{
  bottom:85
},

signUPButtonTextStyle:
{
  fontSize:20,
  color: 'white',
  fontWeight:'bold'
},

signUPredbarTextStyling:
{
  top:10,
  right:10,
  flexDirection: 'row',
  alignSelf: 'center',
}


});

export default SignupScreen;
