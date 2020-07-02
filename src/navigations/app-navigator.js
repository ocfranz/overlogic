import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { colors } from '../styles/colors';
import UserScreen from '../screens//User';
import FiltersScreen from '../screens/Filters';
import RoundedIcon from '../components/RoundedIcon';
import Icon from "react-native-vector-icons/Feather";     
import homeRoute from './home-navigator';
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
				 },
				 showLabel: false
			}}>
			<Tab.Screen 
				name="User" 
				component={UserScreen} 
				options={{
					tabBarLabel: 'User',
					tabBarVisible : false,
					tabBarIcon : ()=>{return <Icon name="user" size={25} color={"#FFFFFF"} style={{backgroundColor: colors.dark, borderRadius: 35, paddingHorizontal: 10, paddingVertical: 10, opacity:0.7}}></Icon>
					}
				  }}
			/>
			<Tab.Screen 
				name="Home" 
				component={homeRoute} 
				options={{
					tabBarLabel: 'Home',
					tabBarIcon : ({focused})=>{return <Icon name="maximize" size={25} color={"#FFFFFF"} style={{backgroundColor: colors.blue, borderRadius: 35, paddingHorizontal: 10, paddingVertical: 10, }}></Icon>}
				}}
			/>
			<Tab.Screen 
				name="Filters" 
				component={FiltersScreen}
				options={{
					tabBarLabel: 'Filtros',
					tabBarVisible : false,
					tabBarIcon : ()=>{return <Icon name="filter" size={25} color={"#FFFFFF"} style={{backgroundColor: colors.dark, borderRadius: 35, paddingHorizontal: 10, paddingVertical: 10, opacity:0.7}}></Icon>}
				  }} 
			/>
		</Tab.Navigator>
	);
}

export default appBottomTabs;
