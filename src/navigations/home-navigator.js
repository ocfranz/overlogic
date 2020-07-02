import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import UploadPhotoScreen from '../screens/UploadPhoto';

const Stack = createStackNavigator();
const homeRoute = ()=>{
	return (
		<Stack.Navigator 
			screenOptions={{
				headerShown: false
			}} 
			initialRouteName = "Home"
			>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Upload" component={UploadPhotoScreen} />
			
		</Stack.Navigator>
	);
}
export default homeRoute;