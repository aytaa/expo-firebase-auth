import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../dashboard/MainScreen';

const RootStack = createStackNavigator();

const DashBoardStackScreen = () => (
    <RootStack.Navigator screenOptions={{ headerMode: 'none'}}>
        <RootStack.Screen name="MainScreen" component={MainScreen}/>
    </RootStack.Navigator>
);

export default DashBoardStackScreen;
