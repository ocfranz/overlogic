import React, {useState, useEffect} from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import UserScreen from '../screens//User';
import FiltersScreen from '../screens/Filters';

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

export default appBottomTabs;
