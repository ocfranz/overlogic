import React, { useState, useEffect, useRef} from 'react';

import {View, Text, Button } from 'react-native';
import { ViroScene, ViroARScene,  ViroUtils, ViroText} from 'react-viro';
import { RNCamera } from 'react-native-camera'
import RNTextDetector from 'react-native-text-detector';
import Marker from '../../components/Marker';
import { colors } from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

import processTextValue from '../../utils/processTextValue';

const Home = ({navigation})=>{
	const camera = useRef();
	const [ textProcessed, setTextProcessed] = useState('Texto sin procesar');
	const [ collectionText, setCollectionText ] = useState([]);
	const [ showMarkers, setShowMarkers ] = useState(false);
	const [ scanningText, setEscanningText ] = useState(true);

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
			let collectionWords = [];
			visionResp.map((t, i)=>{
				console.log(t.text);
				text += `, ${t.text}`
				collectionWords.push(t);
			})
			setCollectionText(collectionWords);
			setTextProcessed(text);
			setShowMarkers(true);
    	} catch (e) {
      		console.warn(e);
    	}
	}
	const drawMarkers = (collection) =>{
		const markerTemplate = [];
		collection.map((t,i)=>{
			markerTemplate.push(<Marker key={i}  
				top={t.bounding.top} 
				left={t.bounding.left} 
				width={t.bounding.width} 
				height={t.bounding.height}
				value={t.value}
				/>)
		});
		return markerTemplate;
	}
	const handleOnTextRecognized = (event) =>{
		let collectionWords = [];
		event.textBlocks.map((item, inde)=>{
			// Item.value, item.bound.size, item.bound.origin
			if(processTextValue(item.value)){
				console.log(item.value)
				collectionWords.push({'bounding': { 
					'top': item.bounds.origin.y,
					'left':item.bounds.origin.x,
					'width': item.bounds.size.width,
					'height': item.bounds.size.height,
					'value': item.value
				 }})
			}
		});

		setCollectionText(collectionWords);
		setShowMarkers(true);
	}

    return(
        <View>
           <RNCamera
		   	ref= {camera}
			style={{ height : '100%'}}
			type={RNCamera.Constants.Type.back}
			flashMode={RNCamera.Constants.FlashMode.on}
			androidCameraPermissionOptions={{
				title: 'Necesitamos tu acceder a tu cámara',
				message: 'Activa tu camara',
				buttonPositive: 'Ok',
				buttonNegative: 'Cancelar',
			}}
			onTextRecognized={(event)=>handleOnTextRecognized(event)}
			>
			{({ camera, status }) => {
				if (status !== 'READY') return <Text>Camera not ready</Text>;
				return (
				<>
				<View style={{ position: 'absolute', height : 50, paddingHorizontal: 21, paddingVertical: 15, width: '100%', alignItems: 'center',flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
					<Text style={{fontSize: 16, fontFamily: 'gilroy_regular', color: colors.yellow_overlogic}}>
						{ collectionText.length == 0 ?`Buscando...` : `Formulas: ${collectionText.length}`}
					</Text>
					<TouchableOpacity activeOpacity={1} style={{backgroundColor: colors.blue, padding:10, borderRadius: 10}} onPress={()=>navigation.navigate('Upload')}>
						<Text style={{color: colors.white, fontFamily: 'gilroy_regular'}}>Ver por foto</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 0, width:'100%', flexDirection: 'row', justifyContent: 'center',}}>
					{
						showMarkers && drawMarkers(collectionText)
					}
				</View>
				</>
				);
			}}
        </RNCamera>
        </View>
    );
}

export default Home;