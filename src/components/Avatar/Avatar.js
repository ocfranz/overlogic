import React from 'react';
import {Image } from 'react-native';
import styles from './styles';
const Avatar = ()=>{
    return(
        <Image 
        source={{ uri : 'https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
        style={styles.avatar}
        ></Image>
    );
}

export default Avatar;