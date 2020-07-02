import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, TextInput, AsyncStorage, TouchableOpacity } from 'react-native';

import { colors } from '../../styles/colors';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import Tag from '../../components/Tag';
import styles from './styles';
import Accordion from '../../components/Accordion';
import Icon from "react-native-vector-icons/Feather";
import Button from '../../components/Button';
import BASE_URL from '../../variables/API_ROUTES';
import Axios from 'axios';

const User = ({navigation})=>{
    const [ userInfo, setUserInfo ] = useState({ name : 'Julia Doe', leveL : '1', age : '18', grade : 'primero'});
    const [ name, setName ] = useState('');
    const [ enableEdit , setEnableEdit ]  = useState(false);

    useEffect(()=>{
        async function searchUser(){
			try {
				const user = await AsyncStorage.getItem('user');
				if(user != null){
                    const userId = JSON.parse(user).id;
                    console.log('ID',userId, user)
                    let config = {
                        method: 'get',
                        url: `${BASE_URL}users/info/${userId}`,
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                    };
                
                    Axios(config)
                    .then( (response) => {
                        let data = JSON.parse(JSON.stringify(response.data));
                        console.log(data)
                        if(data.userExists){
                            setName(data.name);
                        }
                    })
                    .catch( (error) => {
                        console.log('errossr')
                    });
				}
			} catch (error) {
				console.log('Error on getting user');
			}
		}
		searchUser();
    }, [])

    const handleLogoOut = async ()=>{
        try {
            await AsyncStorage.clear();
            //Logout
        } catch (error) {
            console.log('Error on getting user',error);
        }
    }
    const handleOnEdit = () =>{
        setEnableEdit(!enableEdit);
    }
    const handleOnTextInputChange = (event) =>{
        console.log(event.target)
    }
    return(
        <ScrollView style={{backgroundColor : colors.white}} >
            <View >
                <Header route='User' title='' handleOnBack={()=>navigation.goBack()} handleOnEdit={()=>handleOnEdit()} edit={enableEdit}/>
                <View style={styles.user_info}>
                    <Avatar />
                    {
                        !enableEdit ? <Text style={styles.user_name}>{name}</Text>
                        : <TextInput 
                        name="user_name"
                        value={userInfo.name}
                        onChange={event=>handleOnTextInputChange(event)}
                        style={{fontFamily: 'gilroy_bold', fontSize: 20, backgroundColor: '#ffffff'}}
                        />  
                    }
                    <Tag level={userInfo.level}/>
                    <View style={styles.user_details}>
                        <View style={styles.user_detail_content}>
                            
                            {
                                enableEdit 
                                ? <TextInput 
                                    name="user_age"
                                    value={userInfo.age}
                                    onChange={event=>handleOnTextInputChange(event)}
                                    style={{fontFamily: 'gilroy_bold', fontSize: 20, backgroundColor: '#ffffff'}}
                                    /> 
                                : <Text style={styles.user_detail_info}>{userInfo.age}</Text>
                            }
                            <Text style={styles.user_detail_label}>Años</Text>
                        </View>
                        <View style={styles.user_detail_content}>
                        {
                                enableEdit 
                                ? <TextInput 
                                    name="user_grade"
                                    value={userInfo.grade} 
                                    style={{fontFamily: 'gilroy_bold', fontSize: 20}}
                                    onChange={event=>handleOnTextInputChange(event)}
                                    /> 
                                : <Text style={styles.user_detail_info}>{userInfo.grade}</Text>
                            }
                            <Text style={styles.user_detail_label}>Grado</Text>
                        </View>
                    </View>
                </View>
                <View style={{width : '100%',}}>
                    <Accordion title="Configuraciones" type="settings"/>
                    <Accordion title="Privacidad" type="privacy"/>
                    <Accordion title="Ayuda" type="help"/>
                    <Accordion title="Acerca de" type="about"/>
                    <TouchableOpacity activeOpacity={1} style={{flexDirection: 'row',
                               
                                height:56,
                                paddingLeft:21,
                                paddingRight:21,
                                alignItems:'center',
                                opacity : 1,}}
                    onPress={()=>handleLogoOut()}
                    >
                        <Icon name="log-out" size={20} color={colors.blue}></Icon>
                        <Text style={{fontSize: 16,
                                    color: colors.blue,
                                    marginLeft: 10,
                                    fontFamily : 'gilroy_regular',}}>
                                        Cerrar sesión
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default User;