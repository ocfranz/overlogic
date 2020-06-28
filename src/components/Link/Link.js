import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Link = ({children, handleOnPress, accessibilityLabel})=>{
    return (
        <Text style={styles.default_link} onPress={handleOnPress} accessibilityLabel={accessibilityLabel}> {`${children}`} </Text>
    );
}
Link.defaultProps = {
    children : 'Simple link',
    accessibilityLabel : 'simple link'
}
export default Link;