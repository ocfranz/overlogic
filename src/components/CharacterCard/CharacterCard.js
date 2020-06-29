import React from 'react';
import { Image, TouchableHighlight, View, Text } from 'react-native';
import styles from './styles';
import LogoImage from '../../assets/images/logo_overlogic_big.png';

const CharacterCard = ({ name, image, handleOnEvent, selected })=>{
    return (
        <View style={styles.character_card} >
            <View style={selected ? styles.card_content_selected : styles.card_content} onPress={handleOnEvent}>
                <Image source={image} style={styles.character_img}></Image>
                <Text  style={styles.character_name}>{name}</Text>
            </View>
        </View>
    );
}
CharacterCard.defaultProps = {
    image : LogoImage,
    selected : false
}
export default CharacterCard;