import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

import LogoImage from '../../assets/images/logo_overlogic_big.png';

const Logo = () =>{
    return(
        <Image source={LogoImage} style={styles.logo}></Image>
    )
}

Logo.defaultProps = {
  
}

export default Logo;