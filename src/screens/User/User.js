import React from 'react';
import {View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import Tag from '../../components/Tag';
import styles from './styles';
const User = ({navigation})=>{
    return(
        <ScrollView>
            <View >
                <Header route='User' title='' handleOnBack={()=>navigation.goBack()}/>
                <View style={styles.user_info}>
                    <Avatar />
                    <Text style={styles.user_name}> Julia Doe</Text>
                    <Tag />
                    <View style={styles.user_details}>
                        <View style={styles.user_detail_content}>
                            <Text style={styles.user_detail_info}>18</Text>
                            <Text style={styles.user_detail_label}>Años</Text>
                        </View>
                        <View style={styles.user_detail_content}>
                            <Text style={styles.user_detail_info}>Primer</Text>
                            <Text style={styles.user_detail_label}>Grado</Text>
                        </View>
                    </View>
                </View>
                
                
            </View>
        </ScrollView>
    );
}

export default User;