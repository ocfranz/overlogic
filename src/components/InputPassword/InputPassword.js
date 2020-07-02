import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
const InputPassword = ({ value, handleOnChange, placeholder, type}) =>{
    return(
      <TextInput
          style={styles.input_ligth}
          onChangeText={handleOnChange}
          value={value}
          placeholder={placeholder}
          spellCheck={false}
          autoCorrect={false}
          secureTextEntry={true}
          textContentType={'password'}
      />
    )
}

export default InputPassword;
