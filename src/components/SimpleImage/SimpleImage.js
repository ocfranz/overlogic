import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const SimpleImage = ({ source , type}) =>{
    return(
        type == "onboarding" 
        ? <Image source={source} style={styles.onboarding_img}></Image>
        : <Image source={source} style={styles.default}></Image>
    )
}

SimpleImage.defaultProps = {
    type : 'default'
}

export default SimpleImage;