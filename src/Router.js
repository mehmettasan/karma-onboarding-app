import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage1 from './pages/RegisterPages/RegisterPage1';
import RegisterPage2 from './pages/RegisterPages/RegisterPage2';
import RegisterPage3 from './pages/RegisterPages/RegisterPage3';
import RegisterPage4 from './pages/RegisterPages/RegisterPage4';

const Stack = createNativeStackNavigator();

const RegisterStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='RegisterPage1' component={RegisterPage1}/>
            <Stack.Screen name='RegisterPage2' component={RegisterPage2}/>
            <Stack.Screen name='RegisterPage3' component={RegisterPage3}/>
            <Stack.Screen name='RegisterPage4' component={RegisterPage4}/>
        </Stack.Navigator>
    )
}

const WelcomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false,animation:"none"}}>
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