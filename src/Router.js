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
import { View, Text } from 'react-native';
import { useAtom } from 'jotai';
import { activeUserAtom } from './store/jotaiStore';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarItemStyle = {
    width: "75%", height: 40, borderRadius: 10, justifyContent: "center", alignItems: "center"
}

const tabBarOptions = {
    headerShown: false,
    tabBarLabelStyle: { display: "none" },
    tabBarStyle: {
        height: 100,
    }
}

const MainTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={tabBarOptions}>
            <Tab.Screen name='UsersPage' component={UsersPage} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ backgroundColor: focused ? "#844AFF" : "#E8E8E8", ...tabBarItemStyle }}>
                            <Text style={{ color: focused ? "white" : "#8C8C8C", fontSize: 16 }}>Kullanıcılar</Text>
                        </View>
                    )
                },
            }} />
            <Tab.Screen name='LikesPage' component={LikesPage} options={{
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

const WelcomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
            <Stack.Screen name='WelcomePage' component={WelcomePage} />
            <Stack.Screen name='LoginPage' component={LoginPage} />
            <Stack.Screen name='RegisterPage1' component={RegisterPage1} />
            <Stack.Screen name='RegisterPage2' component={RegisterPage2} />
            <Stack.Screen name='RegisterPage3' component={RegisterPage3} />
            <Stack.Screen name='RegisterPage4' component={RegisterPage4} />
        </Stack.Navigator>
    )
}

const Router = () => {
    const [isSignedIn] = useAtom(activeUserAtom)

    return (
        <NavigationContainer>
            {isSignedIn==null
                ?
                <WelcomeStack />
                :
                <MainTabNavigation />
            }
        </NavigationContainer>

    )
}

export default Router