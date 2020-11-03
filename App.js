import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './src/screens/Homescreen';
import Profile from './src/screens/Profile';
import Semesters from './src/screens/Semesters';
import ListFaculty from './src/screens/ListFaculty';
import FirstSemList from './src/screens/FirstSemList';
import SecSemList from './src/screens/SecSemList';
import ThirdSemList from './src/screens/ThirdSemList';

const stack = createStackNavigator();

function App(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name = "Home" component = {Homescreen}/>
                <stack.Screen name = "My Profile" component = {Profile}/>
                <stack.Screen name = "Semester-wise Courses" component = {Semesters}/>
                <stack.Screen name = "Faculty List" component = {ListFaculty}/>
                <stack.Screen name = "First Semester" component = {FirstSemList}/>
                <stack.Screen name = "Second Semester" component = {SecSemList}/>
                <stack.Screen name = "Third Semester" component = {ThirdSemList}/>

            </stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
