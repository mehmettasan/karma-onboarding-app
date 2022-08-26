import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomePage from './pages/WelcomePage/WelcomePage';

const Stack = createNativeStackNavigator();

const WelcomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='WelcomePage' component={WelcomePage} options={{headerShown:false}} /> 
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