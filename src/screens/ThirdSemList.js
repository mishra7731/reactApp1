import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ThirdSemList = () => {
    const courseList1 =[
        { name: " Linear Algebra", key: 'Math 4345'},
        { name: " Data Structure", key: 'CSE 4303'},
        { name: " DBMS", key: 'CSE 4307'},
        { name: " Theory of Computation", key: 'SWE 4309'},
        { name: " Object Oriented concept II", key: 'SWE 4301'},
        { name: " Accounting", key: 'Hum 4347'},
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
                source = {require("./../../assets/3rdsem.jpg")}
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
            color: "darkcyan",
            textAlign: "left",
            
        },
        textStyle2: {
            fontSize: 20,
            fontStyle: "normal",
            color: "midnightblue",
            fontWeight: "bold"
            
        },
        imageStyle: {
            width: 300,
            height: 250,
            alignSelf: "center"
        }

    }
    
)

export default ThirdSemList;