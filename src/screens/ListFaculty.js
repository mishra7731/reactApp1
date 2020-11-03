import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const faculties = 
    [
        {name: " Dr. Muhammad Mahbubul Alam", key: '1'}, 
        {name: " Dr. Abu Raihan Mostofa Kamal", key: '2'}, 
        {name: " Mohayeminul Islam", key: '3'}, 
        {name: " Tajkia Rahman Toma", key: '4'}, 
        {name: " Faisal Hussain", key: '5'},
    ];

const ListFaculty = () => {
    return (
        <View style = {styles.viewStyle}>
            <Image style = {styles.imageStyle}
                source = {require("./../../assets/teacher2.jpg")}
            />
            <Text> </Text>
            <Text style = {styles.textStyle1}>Faculty Lists</Text>
            <Text> </Text>
            <FlatList
                data = {faculties}
                renderItem = {function ({item}){
                    //console.log(item)
                    return (
                        <Text style = {styles.textStyle}>
                            <Text style = {styles.textStyle2}>
                                {item.key} .  
                            </Text>
                            {item.name}
                        </Text>
                    );
                }}>
            </FlatList>
        </View>
    );
    
}

const styles = StyleSheet.create({
    viewStyle: {
        paddingTop: 50,
        alignSelf: "center",
        marginLeft: 30,
        marginRight: 30,
        
        
    },
    textStyle: {
        fontSize: 18,
        fontStyle: "normal",
        color: "crimson",
        textAlign: "left",
        
    },
    textStyle1: {
        fontSize: 20,
        fontStyle: "normal",
        color: "darkred",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    textStyle2: {
        fontSize: 20,
        fontStyle: "normal",
        color: "darkred",
        fontWeight: "bold"
        
    },
    imageStyle: {
        width: 380,
        height: 300,
        alignSelf: "center",
        
    },
   
    ListStyle: {},
});

export default ListFaculty;