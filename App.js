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
import LoginScreen from './src/screens/Login';
import UserScreen from './src/screens/User';
import FiltersScreen from './src/screens/Filters';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
	const isARSupportedOnDevice = ViroUtils.isARSupportedOnDevice;
	const [ isARSupported, setARSupported] = useState(false);
	
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
		<Tab.Navigator>
		<Tab.Screen name="User" component={UserScreen} />
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Filters" component={FiltersScreen} />
		</Tab.Navigator>
		</NavigationContainer>
	);
};


export default App;
