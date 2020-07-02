import React, { Component, useState } from 'react';

import {View, Text ,  StatusBar,Image,  SafeAreaView, ScrollView, 
        StyleSheet, Modal, Alert, TouchableHighlight, CheckBox} from 'react-native';
import OnboardingImage from '../../assets/images/onboarding_top.png';
import styles from './styles';
import Title from '../../components/Title';
import SimpleImage from '../../components/SimpleImage';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';
import InputPassword from '../../components/InputPassword';
import validateUserInfo from '../../utils/validateUserInfo';
import signupUser from '../../services/signupUser';

const SignUp = ({navigation})=>{
    const [userInfo, setUserInfo ] =  useState({ name : '', username : ' ', password : '', password_confirm : ''}); 
    const [modalVisible, setModalVisible, setSelection, isSelected] = useState(false);

    const handleInputChange = (text, name)=>{
        switch(name){
            case 'name':
                setUserInfo({ name : text, ...userInfo});
                break;
            case 'username':
                setUserInfo({ username : text, ...userInfo});
                break;
            case 'password':
                setUserInfo({ password : text, ...userInfo});
                break;
            case 'password-confirm':
                setUserInfo({ password_confirm : text, ...userInfo});
                break;
            default :
                throw new Error('Error type') 

        }
    }
    const signUpUser = ()=>{
        let validation = validateUserInfo(userInfo);

        if(validation.status){
            let authObj = signupUser(
                {username : userInfo.username, 
                email : '', 
                password : userInfo.password,
                name : userInfo.name });
            if(authObj.auth){
                console.log('registrado')
            }else{
                console.log(authObj.msg)
            }
        }else{
            console.log(validation.msg);
        }
    }

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.signup_wrapper}>
                    <Logo />
                    <Title />
                    <View style={styles.form}>
                        <Input placeholder="Nombres" handleOnChange={(TextInputValueHolder)=>handleInputChange(TextInputValueHolder, 'name')}/>
                        <Input placeholder="Usuario" handleOnChange={(TextInputValueHolder)=>handleInputChange(TextInputValueHolder, 'username')}/>
                        <InputPassword placeholder="Contraseña" handleOnChange={(TextInputValueHolder)=>handleInputChange(TextInputValueHolder, 'password')}/>
                        <InputPassword placeholder="Confirmar Contraseña" handleOnChange={(TextInputValueHolder)=>handleInputChange(TextInputValueHolder, 'password-confirm')}/>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={isSelected}
                                onChange={setSelection}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Acepto las 
                                <Link children='Politicas de Privacidad' handleOnPress={()=> setModalVisible(true)}/>
                            </Text>
                        </View>
                        <Button children="Registrarse" handleOnPress={()=>signUpUser()}/>
                        <Link children='Tengo una cuenta' handleOnPress={()=>navigation.navigate('Login')}/>
                    </View>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <View>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Nosotros y todos los sistemas empleados en esta aplicación, mantenemos toda tu información de manera secreta. Tu información personal nunca será compartida con nadie más.</Text>

                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#BB2020" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                        <Text style={styles.textStyle}>X</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>

        
    );
}

export default SignUp;