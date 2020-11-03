import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const FirstSemList = () => {
    const courseList1 =[
        {name: " Structured Programming I", key: 'CSE 4107'}, 
        {name: " TES", key: 'Hum 4147'}, 
        {name: " Calculus", key: 'Math 4141'}, 
        {name: " Physics", key: 'Phy 4143'}, 
        {name: " Islamiat", key: 'Hum 4145'},
        {name: " Software Introduction", key: 'SWE 4101'},
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
                source = {require("./../../assets/1stsem1.jpg")}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        viewStyle: {
            paddingTop: 100,
            marginLeft: 30,
    

        },
        textStyle: {
            fontSize: 18,
            fontStyle: "italic",
            color: "indianred",
            textAlign: "left",
            
        },
        textStyle2: {
            fontSize: 20,
            fontStyle: "normal",
            color: "firebrick",
            fontWeight: "bold"
            
        },
        imageStyle: {
            width: 300,
            height: 250,
            alignSelf: "center",
            alignContent: "flex-end",
    
        }

    }
    
)

export default FirstSemList;