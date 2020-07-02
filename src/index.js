import React, {useState, useEffect} from 'react';
import { AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppBottomTabs, AuthRouter } from './navigations';

const App = () => {
	const [ isSignedIn , setisSignedIn ] = useState(false);
	
	useEffect(()=>{
		async function searchUser(){
			try {
				const user = await AsyncStorage.getItem('user');
				if(user != null){
					setisSignedIn(true)
				}
			} catch (error) {
				console.log('Error on getting user');
			}
		}
		searchUser();
	},[] )
	return (
		<NavigationContainer>
			{
				isSignedIn ? AppBottomTabs(): AuthRouter()
			}
		</NavigationContainer>
	);
};


export default App;
