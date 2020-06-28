import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import OnboardingScreen from '../screens/Onboarding';

const Stack = createStackNavigator();
import appBottomTabs from './app-navigator';

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
export default initialRoues;
