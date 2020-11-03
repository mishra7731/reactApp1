import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const SecSemList = () => {
    const courseList1 =[
        { name: " Calculus II", key: 'Math 4241'},
        { name: " Arabic Spoken", key: 'Hum 4249'},
        { name: " Discrete Mathematics ", key: 'CSE 4203'},
        { name: " Object Oriented Concepts I", key: 'SWE 4201'},
        { name: " Digital Logic Design", key: 'CSE 4205'},
        { name: " Physics II", key: 'Phy 4267'},
    ];
    return(
        <View style = {styles.viewStyle}>
            
            <FlatList
                data = {courseList1}
                renderItem = {
                    function({item}){
                        return(
                            <Text style = {styles.textStyle}>
                                <Text style = {styles.textStyle2}>
                                    {item.key} : 
                                </Text>
                                {item.name}
                            </Text>
                        )
                    }
                }
            />
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>

            <Image style = {styles.imageStyle}
                source = {require("./../../assets/2ndimage.jpg")}
            />
        </View>
    )

}

const styles = StyleSheet.create(
    {
        viewStyle: {
            paddingTop: 70,
            marginLeft: 30,
            marginRight: 30,
    

        },
        textStyle: {
            fontSize: 18,
            fontStyle: "italic",
            color: "olivedrab",
            textAlign: "left",
            
        },
        textStyle2: {
            fontSize: 20,
            fontStyle: "normal",
            color: "darkgreen",
            fontWeight: "bold"
            
        },
        imageStyle: {
            width: 300,
            height: 250,
            alignSelf: "center",
            
    
        }

    }
    
)
export default SecSemList;