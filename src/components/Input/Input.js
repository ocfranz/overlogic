import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';
const Input = ({ value, handleOnChange, placeholder}) => {
  return (
    <TextInput
        style={styles.input_ligth}
        onChangeText={() => handleOnChange}
        value={value}
        placeholder={placeholder}
    />
  );
}

Input.defaultProps = {
    value : ''
}

export default Input;