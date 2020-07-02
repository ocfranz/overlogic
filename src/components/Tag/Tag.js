import React from 'react';
import {Text } from 'react-native';
import styles from './styles';
import Icon from "react-native-vector-icons/Feather";
import { colors } from '../../styles/colors';
const Tag = ({level})=>{
    return(
        <Text style={styles.tag}>
            <Icon name="award" size={18} color ={ colors.blue} ></Icon>
            {`Nivel: ${level}`}
        </Text>
    );
}

Tag.defaultProps = {
    level : 1
}

export default Tag;