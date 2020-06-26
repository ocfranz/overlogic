import React, {useEffect} from 'react';

import {View, Text , Button, StatusBar, SafeAreaView, StyleSheet} from 'react-native';

import LoginTitle from './styles';

const Login = ({navigation})=>{
    useEffect(()=>{
       
    }, [])
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.instructions}>Screen : Login</Text>
                <Button
                    title="Iniciar sesión"
                    onPress={() => navigation.navigate('App')}
                />
                <Button
                    title="Registrate"
                    onPress={() => navigation.navigate('Signup')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    instructions: {
        fontFamily: "gilroyRegular",
        fontSize: 20,
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
  });
export default Login;