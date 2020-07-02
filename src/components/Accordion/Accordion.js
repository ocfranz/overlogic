import React, { useState, useRef, useEffect } from 'react';
import {View, Text, TouchableOpacity, Platform, UIManager, LayoutAnimation } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { colors } from '../../styles/colors';
import styles from './styles';

const Accordion = ({title, type,  data})=>{
    const accordion = useRef();
    const [ expanded , setExpanded ] = useState(false);
    const [ iconName, setIcoName ] = useState('settings')
    useEffect(()=>{
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        switch(type){
            case 'settings':
                setIcoName('settings')
                break;
            case 'about' :
                setIcoName('alert-circle')
                break;
            case 'help':
                setIcoName('help-circle')
                break;
            case 'privacy' :
                setIcoName('lock')
                break;
            default :
                break;

        }
    }, [])
    const toggleExpand = ()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    }
    
    return(
        <View >
             <TouchableOpacity activeOpacity={1} ref={accordion} style={styles.row} onPress={()=>toggleExpand()}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name={iconName} size={20} color={colors.dark} style={{opacity:0.7}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Icon name={expanded ? 'chevron-down' : 'chevron-right'} size={20} color={colors.dark} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                expanded &&
                <View style={styles.child}>
                    <Text>{data}</Text>    
                </View>
            }
        </View>
    );
}
Accordion.defaultProps = {
    title : 'Ajustes',
    data : 'simple acoordion'
}

export default Accordion;