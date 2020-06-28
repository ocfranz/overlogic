import React, { useState, useEffect} from 'react';

import {View, Text } from 'react-native';
import { ViroScene, ViroARScene,  ViroUtils, ViroText} from 'react-viro';
import { RNCamera } from 'react-native-camera'

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
           <RNCamera
			style={{ height : '100%'}}
			type={RNCamera.Constants.Type.back}
			flashMode={RNCamera.Constants.FlashMode.on}
			androidCameraPermissionOptions={{
				title: 'Permiso para usar carmar',
				message: 'Activa tu camara',
				buttonPositive: 'Ok',
				buttonNegative: 'Cancelar',
			}}
			>
			{({ camera, status }) => {
				if (status !== 'READY') return <Text>nOT READY</Text>;
				return (
				<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
					
					<Text style={{ fontSize: 14 }}> SNAP </Text>
					
				</View>
				);
			}}
        </RNCamera>
        </View>
    );
}

export default Home;