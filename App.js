/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import { ViroScene, ViroARScene,  ViroUtils, ViroText} from 'react-viro';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import UserScreen from './src/screens/User';
import FiltersScreen from './src/screens/Filters';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import OnboardingScreen from './src/screens/Onboarding';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const appBottomTabs = ()=>{
	return (
		<Tab.Navigator initialRouteName ={"Home"}>
			<Tab.Screen name="User" component={UserScreen} />
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Filters" component={FiltersScreen} />
		</Tab.Navigator>
	);
}
const initialRoues = ()=>{
	return (
		<Stack.Navigator 
			screenOptions={{
				headerShown: false
			}} 
			initialRouteName = "Onboarding"
			>
			<Stack.Screen name="Onboarding" component={OnboardingScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
			<Stack.Screen name="App" component={appBottomTabs} />
		</Stack.Navigator>
	);
}
const App = () => {
	const isARSupportedOnDevice = ViroUtils.isARSupportedOnDevice;
	const [ isARSupported, setARSupported] = useState(false);
	const [ isSignedIn , setisSignedIn ] = useState(false);
	
	useEffect(()=>{
		isARSupportedOnDevice(handleARNotSupported, handleARSupported)
	}, [])

	const handleARNotSupported = ()=>{
		setARSupported(false)
	}
	const handleARSupported = () => {
		setARSupported(true)
	}
	return (
		<NavigationContainer>
			{
				isSignedIn ? appBottomTabs(): initialRoues()
			}
		</NavigationContainer>
	);
};


export default App;
