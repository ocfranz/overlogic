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

const SignUp = ()=>{
    const [modalVisible, setModalVisible, setSelection, isSelected] = useState(false);

    const handleInputChange = ()=>{
        
    }

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.signup_wrapper}>
                    <Logo />
                    <Title />
                    <View style={styles.form}>
                        <Input placeholder="Nombres" handleOnChange={()=>handleInputChange()}/>
                        <Input placeholder="Usuario" handleOnChange={()=>handleInputChange()}/>
                        <Input placeholder="Contraseña" handleOnChange={()=>handleInputChange()}/>
                        <Input placeholder="Confirmar Contraseña" handleOnChange={()=>handleInputChange()}/>
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
                        <Button children="Registrarse" handleOnPress={()=>signupUser()}/>
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