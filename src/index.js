import React, {useState, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppBottomTabs, AuthRouter } from './navigations';

const App = () => {
	
	const [ isSignedIn , setisSignedIn ] = useState(false);
	
	return (
		<NavigationContainer>
			{
				isSignedIn ? AppBottomTabs(): AuthRouter()
			}
		</NavigationContainer>
	);
};


export default App;
