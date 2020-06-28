import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const SimpleButton = ({children, handleOnPress, accessibilityLabel})=>{
    return (
        <TouchableHighlight style ={styles.btn_blue} onPress={handleOnPress}  accessibilityLabel={accessibilityLabel}>
            <Text style={styles.btn_blue_text}> {`${children}`} </Text>
          </TouchableHighlight> 
    );
}
SimpleButton.defaultProps = {
    accessibilityLabel : 'Simple button'
}
export default SimpleButton;