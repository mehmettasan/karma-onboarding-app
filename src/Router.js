import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';

const Stack = createNativeStackNavigator();

const WelcomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='WelcomePage' component={WelcomePage} /> 
            <Stack.Screen name='LoginPage' component={LoginPage} />
        </Stack.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <WelcomeStack />
        </NavigationContainer>
    )
}

export default Router