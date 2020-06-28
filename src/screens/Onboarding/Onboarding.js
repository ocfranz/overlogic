import React, {useEffect} from 'react';

import {View, Text , Button, StatusBar, SafeAreaView, StyleSheet} from 'react-native';

const Onboarding = ({navigation})=>{
    useEffect(()=>{
       
    }, [])
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.title_blue}>Overlogic</Text>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
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
    title: {
        fontFamily: "gilroy_bold",
        fontSize: 30,
        color: "#333333",
       
        
    },
    title_blue :{
        color: "#567DF4",
        fontSize: 30,
        fontFamily: "gilroy_bold",
        fontSize: 30,
        textAlign: "center"
    }
  });
export default Onboarding;