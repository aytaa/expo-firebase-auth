import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../dashboard/MainScreen';

const MainStack = createStackNavigator();

const DashBoardStackScreen = () => (
    <MainStack.Navigator
        screenOptions={{
            title: 'Account'
        }}
    >
        <MainStack.Screen name="MainScreen" component={MainScreen}/>
    </MainStack.Navigator>
);

export default DashBoardStackScreen;
