import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage1 from './pages/RegisterPages/RegisterPage1';

const Stack = createNativeStackNavigator();

const RegisterStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='RegisterPage1' component={RegisterPage1}/>
        </Stack.Navigator>
    )
}

const WelcomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='WelcomePage' component={WelcomePage} /> 
            <Stack.Screen name='LoginPage' component={LoginPage} />
            <Stack.Screen name="RegisterPage" component={RegisterStack} />
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