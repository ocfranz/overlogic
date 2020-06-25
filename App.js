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

import { ViroScene, ViroARScene,  ViroUtils,
	ViroText} from 'react-viro';


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
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<Text>{isARSupported ? 'AR enabled' : 'Not enable AR'}</Text>
				<ViroScene width={100}>
					<ViroText text={'ss'}></ViroText>
				</ViroScene>
				<Text>Helsslo</Text>
			</SafeAreaView>
		</>
	);
};


export default App;
