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
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Settings" component={LoginScreen} />
		</Tab.Navigator>
	);
};


export default App;
