import React from 'react';
import {View, Text } from 'react-native';
import Header from '../../components/Header';
const User = ({navigation})=>{
    return(
        <View>
            <Header route='User' title='' handleOnBack={()=>navigation.goBack()}/>
            <Text>User profile</Text>
        </View>
    );
}

export default User;