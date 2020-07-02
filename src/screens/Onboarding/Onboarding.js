import React, {useEffect} from 'react';

import {View, Text , StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import OnboardingImage from '../../assets/images/onboarding_top.png';
import SimpleImage from '../../components/SimpleImage';
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Onboarding = ({navigation})=>{
    useEffect(()=>{
       
    }, [])
    return(
        <SafeAreaView>
            <View>
                <View style={styles.icon}>
                    <SimpleImage source={OnboardingImage} type="onboarding"/>
                    <Logo />
                    <Title />
                </View>
                <View style={styles.form1}>
                    <Button
                        children="Login"
                        handleOnPress={() => navigation.navigate('Login')}
                    />
                </View>
                <View style={styles.form2}>    
                    <Button
                        children="Registrate"
                        handleOnPress={() => navigation.navigate('Signup')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "gilroy_bold",
        fontSize: 30,
        color: "#333333"
    },
    title_blue :{
        color: "#567DF4",
        fontSize: 30,
        fontFamily: "gilroy_bold",
        fontSize: 30,
        textAlign: "center"
    },
    icon :{
        alignItems: 'center'
    },
    form1 :{
        width : '100%',
        paddingLeft : 30,
        paddingRight : 30,
        paddingTop : 100,
        alignItems : 'center'
    },
    form2 :{
        width : '100%',
        paddingLeft : 30,
        paddingRight : 30,
        paddingTop : 10,
        alignItems : 'center'
    }
  });
export default Onboarding;