import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';

const Profile = () =>{
    return(
        <View style = {styles.viewStyle}>
            <Image
                style = {styles.imageStyle}
                source = {require("./../../assets/PP.jpg")}
            />
            <Text> </Text>
            <Text style = {styles.textStyle}>
                Name : Syeda Mishra Saiara <Text>                                                   </Text> 
                Student ID: 170042077 <Text>                                                   </Text> 
                Room no: 404, Utility, FHS <Text>                                                   </Text>
                Email: syedamishra@iut-dhaka.edu
            </Text>
        </View>
    );

}

const styles = StyleSheet.create(
    {
        viewStyle: {
            paddingTop: 50,

        },
        textStyle: {
            fontSize : 22,
            color : 'rgb(150, 50, 204)',
            alignSelf : "center",
            paddingLeft: 20,
            fontWeight: "bold"
        },
        imageStyle: {
            width: 300,
            height: 320,
            paddingLeft: 20,
            alignSelf: "center",
        }

    }

);

export default Profile;