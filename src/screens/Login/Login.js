import React, {useEffect} from 'react';

import {View, Text ,  StatusBar,Image,  SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import OnboardingImage from '../../assets/images/onboarding_top.png';
import styles from './styles';
import Title from '../../components/Title';
import SimpleImage from '../../components/SimpleImage';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

const Login = ({navigation})=>{
    useEffect(()=>{
       
    }, [])

    const loginUser = ()=>{
        //Auth user
        navigation.navigate('App');
    }
    const handleInputChange = ()=>{
        //Save username and password
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
                        <Input placeholder="Usuario" handleOnChange={()=>handleInputChange()}/>
                        <Input placeholder="Contraseña" handleOnChange={()=>handleInputChange()}/>
                        <Button children="Iniciar sesión" handleOnPress={()=>loginUser()}/>
                        <Text style={styles.form_optional}>o</Text>
                        <Link children='Registrate aquí' handleOnPress={()=>handleOnLinkPress()}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;