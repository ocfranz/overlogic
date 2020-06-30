import React from 'react';
import {Text } from 'react-native';
import styles from './styles';
const Tag = ({level})=>{
    return(
        <Text style={styles.tag}>
            {`Nivel: ${level}`}
        </Text>
    );
}

Tag.defaultProps = {
    level : 1
}

export default Tag;