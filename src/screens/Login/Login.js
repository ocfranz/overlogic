import React, {useState, useEffect, useRef} from 'react';

import {View, Text ,  StatusBar,Image,  SafeAreaView, ScrollView, StyleSheet, Alert, AsyncStorage} from 'react-native';
import Axios from 'axios';
import OnboardingImage from '../../assets/images/onboarding_top.png';
import styles from './styles';
import Title from '../../components/Title';
import SimpleImage from '../../components/SimpleImage';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import Link from '../../components/Link';
import autenticateUser from '../../services/autenticateUser';

const Login = ({navigation})=>{
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const loginUser = ()=>{
        
        if(username != "" && password != ""){
            autenticateUser({"username": username,"password": password}, handleCallBack);
        }else{

        }
    }
    const handleCallBack = async (data)=>{
        
        if(data.id != undefined){
            if(data.auth){
                try {
                    const user = { auth : true, id : data.id};
                    await AsyncStorage.setItem('user' , JSON.stringify(user));
                    navigation.navigate('App');
                } catch (e) {
                    console.log('Failed to fetch the data from storage');
                }
                
            }else{
                Alert.alert('Contraseña incorrecta');
            }
        }else{
            setUsername('');
            setPassword('');
            Alert.alert('Usario no registrado');
        }
    }
    const handlePasswordInputChange = (text)=>{
        setPassword(text);
    }
    const handleUsernameInputChange = (text)=>{
        setUsername(text);
    }
    const handleOnLinkPress = ()=>{
        navigation.navigate('Signup');
    }
    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={{flexGrow: 1}}
            >
                <View style={styles.login_wrapper}>
                    <SimpleImage source={OnboardingImage} type="onboarding"/>
                    <Logo />
                    <Title />
                    <View style={styles.form}>
                        <Input value={username} placeholder="Usuario" handleOnChange={(TextInputValueHolder )=>handleUsernameInputChange(TextInputValueHolder )}/>
                        <InputPassword value={password} placeholder="Contraseña" handleOnChange={(TextInputValueHolder )=>handlePasswordInputChange(TextInputValueHolder )}/>
                        <Button children="Iniciar sesión" handleOnPress={()=>loginUser()}/>
                        <Text style={styles.form_optional}>o</Text>
                        <Link children='Registrate  aquí' handleOnPress={()=>handleOnLinkPress()}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;