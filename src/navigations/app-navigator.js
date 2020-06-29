import React, {useState, useEffect} from 'react';
import { Icon } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import UserScreen from '../screens//User';
import FiltersScreen from '../screens/Filters';
import RoundedIcon from '../components/RoundedIcon';
import ScanningIcon from '../assets/images/load_icon.png';
import FiltersIcon from '../assets/images/filters_icon.png';
import UserIcon from '../assets/images/user_icon.png';
import PlayIcon from '../assets/images/play_icon.png';
const Tab = createBottomTabNavigator();

const appBottomTabs = ()=>{
	return (
		<Tab.Navigator initialRouteName ={"Home"} 
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
				style :{ 
					backgroundColor: 'transparent',
					position: 'absolute',
					left: 0,
					bottom: 10,
					right: 0,
					borderTopWidth: 0,
					elevation: 0,
				 }
			}}>
			<Tab.Screen 
				name="User" 
				component={UserScreen} 
				options={{
					tabBarLabel: 'User',
					
				  }}
			/>
			<Tab.Screen 
				name="Home" 
				component={HomeScreen} 
				options={{
					tabBarLabel: 'Home',
					
					
				  }}
			/>
			<Tab.Screen 
				name="Filters" 
				component={FiltersScreen}
				options={{
					tabBarLabel: 'Filtros',
					
				  }} 
			/>
		</Tab.Navigator>
	);
}

export default appBottomTabs;
