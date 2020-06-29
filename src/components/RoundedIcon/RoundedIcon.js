import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import styles from './styles';

const RoundedIcon = ({icon,  accessibilityLabel})=>{
    return (
        <TouchableHighlight  accessibilityLabel={accessibilityLabel}>
            <Image source={icon} style={styles.icon_image}></Image>
        </TouchableHighlight> 
    );
}
RoundedIcon.defaultProps = {
    accessibilityLabel : 'Rounded icon'
}
export default RoundedIcon;