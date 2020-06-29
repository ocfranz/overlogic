import React from 'react';
import { Image, TouchableHighlight, View, Text } from 'react-native';
import styles from './styles';

import ArrowBack from '../../assets/images/arrow_back.png';
const Header = ({route, title, handleOnBack})=>{
    return (
        <View style={styles.header_wrapper}>
            {
                route=='Filters' 
                && <>
                    <Image source={ArrowBack} style={styles.header_back_img_left}  onPress={handleOnBack}></Image>
                    <Text style={styles.header_title}>{title}</Text>
                </>
            }
            {
                route=='User' 
                && <>
                    <Text style={styles.header_title}  onPress={handleOnBack}>{title}</Text>
                    <TouchableHighlight onPress={handleOnBack}>
                        <Image source={ArrowBack} style={styles.header_back_img_rigth}></Image>
                    </TouchableHighlight>
                </>
            }
        </View>
    );
}
Header.defaultProps = {
    
}
export default Header;