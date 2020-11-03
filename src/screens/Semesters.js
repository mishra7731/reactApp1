import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Semesters = (props) =>{
    console.log(props);
    return(
        <View style = {styles.viewStyle2}>
            <Image
                source = {require("./../../assets/Semesterpic.jpg")}
                style = {styles.imageStyle}
            />
            <Text> </Text>
            <Button
                title = '1st Semester'
                color = 'maroon'
                onPress = {
                    function(){
                        props.navigation.navigate("First Semester");
                        console.log("Button pressed");
                        
                    }
                }
            />
            <Text>

            </Text>
            <Button
                title = '2nd Semester'
                color = 'maroon'
                onPress = {
                    function(){
                        props.navigation.navigate("Second Semester");
                        console.log("Button pressed");
                        
                    }
                }
            />
             <Text>

            </Text>
            <Button
                title = '3rd Semester'
                color = 'maroon'
                onPress = {
                    function(){
                        props.navigation.navigate("Third Semester");
                        console.log("Button pressed");
            
                    }
                }
            />
        </View>
    )

}

const styles = StyleSheet.create(
    {
        //viewStyle: {
          //  backgroundColor: "peachpuff",
            
            
        //},
        viewStyle2: {
            //backgroundColor: "peachpuff",
            paddingTop: 100,
            marginLeft: 100,
            marginRight: 100,
            alignContent: "center",

        },
        imageStyle: {
            width: 300,
            height: 250,
            alignSelf: "center",
            
        }
        
        
    }

);

export default Semesters;