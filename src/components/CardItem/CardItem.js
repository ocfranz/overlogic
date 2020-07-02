import React from 'react';
import { Image, TouchableHighlight, View, Text } from 'react-native';
import styles from './styles';
import Icon from "react-native-vector-icons/Feather";                
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardItem = ({ type, title, subtitle, color, handleOnEvent })=>{
    return (
        <View style={{backgroundColor : color, borderRadius: 5, marginBottom: 15}}>
            {
                type == 'content'
                &&
                <View style={styles.card}>
                    <View style={styles.card_wrapper_icon}>
                        <View style={styles.card_icon}>
                            <Text style={styles.card_icon_letter}>{title.charAt(0).toLocaleUpperCase()}</Text>
                        </View>
                    </View>
                    <View style={styles.card_wrapper_content}>
                        <Text style={styles.card_title}>{title}</Text>
                        <Text style={styles.card_subtitle}>{subtitle}</Text>
                    </View>
                    <View style={styles.card_wrapper_action}>
                        <TouchableOpacity onPress={handleOnEvent}>
                            <Icon name="trash" size={20} color={"#FFFFFF"}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            {
                type == 'add' &&
                <TouchableOpacity activeOpacity={1} style={{ height:68,width: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={handleOnEvent}>
                    <Icon name="plus" size={20} ></Icon>
                </TouchableOpacity>
            }
        </View>
    );
}
CardItem.defaultProps = {
    type : 'content'
}
export default CardItem;