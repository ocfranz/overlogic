import React, { useState, useEffect} from 'react';

import {View, Text } from 'react-native';
import { ViroScene, ViroARScene,  ViroUtils, ViroText} from 'react-viro';


const Home = ()=>{
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
    return(
        <View>
            <Text> { isARSupported ? 'supo': 'no t'}</Text>
        </View>
    );
}

export default Home;