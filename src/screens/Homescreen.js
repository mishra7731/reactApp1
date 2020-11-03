import React from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const Homescreen = (props)=>{
    console.log(props);
    return(
    <View style = {styles.viewStyle}>
        <Image
        style = {styles.imageStyle}
        source = {require("./../../assets/Logo.jpg")}
        />
        <Text> </Text>


        <Text style = {styles.textStyle1}>
                Department of CSE
        </Text>
        <Text style = {styles.textStyle2}>
            Programme : SWE
        </Text>
        <Text> </Text>

        <TouchableOpacity>
        <Button
            title = 'My Profile'
            color = 'teal'
            onPress = {
                function(){
                    props.navigation.navigate("My Profile");
                    console.log("Button Pressed");

                }
            }
        />

        </TouchableOpacity>
        
        <Text> 

        </Text>
        <Button
            title = 'Semester-wise Courses'
            color = 'teal'
            onPress = {
                function(){
                    props.navigation.navigate("Semester-wise Courses");
                    console.log("Button pressed");

                }
            }
        />
        <Text> 
            
        </Text>
         <Button
            title = 'List of Faculty Members'
            color = 'teal'
            onPress = {
                function(){
                    props.navigation.navigate("Faculty List");
                    console.log("Button pressed");

                }
            }
        />



    </View>);
}

const styles = StyleSheet.create(
    {
        viewStyle: {
            paddingTop: 30,
            
        },
        textStyle1: {
            fontSize: 35,
            color: 'darkblue',
            fontWeight: "bold",
            fontStyle: "italic",
            alignSelf: "center"
            
        },

        textStyle2: {
            fontSize: 35,
            color: 'blue',
            fontStyle: "italic",
            alignSelf: "center"

        },
        imageStyle: {
            width: 320,
            height: 400,
            alignSelf: "center",
        }
    }

);
export default Homescreen;
