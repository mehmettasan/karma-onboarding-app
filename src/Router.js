import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage1 from './pages/RegisterPages/RegisterPage1';
import RegisterPage2 from './pages/RegisterPages/RegisterPage2';
import RegisterPage3 from './pages/RegisterPages/RegisterPage3';
import RegisterPage4 from './pages/RegisterPages/RegisterPage4';
import UsersPage from './pages/UsersPage/UsersPage';
import LikesPage from './pages/LikesPage/LikesPage';
import { View, Text, StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarItemStyle = {
    width: 170, height: 40, borderRadius: 10, justifyContent: "center", alignItems: "center"
}

const tabBarOptions = {
    headerShown: false,
    tabBarLabelStyle: { display: "none" },
    tabBarStyle: {
        height: 100,
    }
}

const MainTabStack = () => {
    return (
        <Tab.Navigator screenOptions={tabBarOptions}>
            <Tab.Screen name='Kullanıcılar' component={UsersPage} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ backgroundColor: focused ? "#844AFF" : "#E8E8E8", ...tabBarItemStyle }}>
                            <Text style={{ color: focused ? "white" : "#8C8C8C", fontSize: 16 }}>Kullanıcılar</Text>
                        </View>
                    )
                },
            }} />
            <Tab.Screen name='Beğenenler' component={LikesPage} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ backgroundColor: focused ? "#844AFF" : "#E8E8E8", ...tabBarItemStyle }}>
                            <Text style={{ color: focused ? "white" : "#8C8C8C", fontSize: 16 }}>Beğenenler</Text>
                        </View>
                    )
                },
            }} />
        </Tab.Navigator>
    )
}

const RegisterStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='RegisterPage1' component={RegisterPage1} />
            <Stack.Screen name='RegisterPage2' component={RegisterPage2} />
            <Stack.Screen name='RegisterPage3' component={RegisterPage3} />
            <Stack.Screen name='RegisterPage4' component={RegisterPage4} />
        </Stack.Navigator>
    )
}

const WelcomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
            <Stack.Screen name='WelcomePage' component={WelcomePage} />
            <Stack.Screen name='LoginPage' component={LoginPage} />
            <Stack.Screen name="RegisterPage" component={RegisterStack} />
            <Stack.Screen name="MainPage" component={MainTabStack} />
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