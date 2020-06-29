import React, { useState, useEffect, useRef} from 'react';

import {View, Text, Button } from 'react-native';
import { ViroScene, ViroARScene,  ViroUtils, ViroText} from 'react-viro';
import { RNCamera } from 'react-native-camera'
import RNTextDetector from 'react-native-text-detector';

const Home = ()=>{
	const camera = useRef();
	const [ textProcessed, setTextProcessed] = useState('Texto sin procesar');

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
	const handleOnProcessImg = async (camera)=>{
		
    	try {
      	
			const options = {
				quality: 0.8,
				base64: true,
				skipProcessing: true,
			};
			const { uri } = await camera.takePictureAsync(options);
			const visionResp = await RNTextDetector.detectFromUri(uri);
			console.log(visionResp);
			let text = '';
			visionResp.map((t, i)=>{
				console.log(t.text);
				text += `, ${t.text}`
			})
			setTextProcessed(text);
    	} catch (e) {
      		console.warn(e);
    	}
	}
    return(
        <View>
           <RNCamera
		   	ref= {camera}
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
				if (status !== 'READY') return <Text>nOT RESSADY</Text>;
				return (
				<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
					
					<Text style={{ fontSize: 14, color : '#fafafa' }}> 
					{ `result: ${textProcessed}`}
					 </Text>
					<Button title='Tomar foto' onPress={()=>handleOnProcessImg(camera)}></Button>
				</View>
				);
			}}
        </RNCamera>
        </View>
    );
}

export default Home;