import React, { useState, useRef, useEffect } from 'react';
import {View, Text, TouchableOpacity, Platform, UIManager, LayoutAnimation, Switch, TouchableHighlight, Modal } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { colors } from '../../styles/colors';
import styles from './styles';
//import { TouchableHighlight } from 'react-native-gesture-handler';

const Accordion = ({title, type,  data})=>{
    const accordion = useRef();
    const [ expanded , setExpanded ] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isSetting, setIsSetting] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isHelp, setIsHelp] = useState(false);
    const [isPrivacy, setIsPrivacy] = useState(false);
    const [modalVersion, setModalVersion] = useState(false);
    const [ iconName, setIcoName ] = useState('settings')
    useEffect(()=>{
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        switch(type){
            case 'settings':
                setIcoName('settings')
                setIsSetting(true);
                break;
            case 'about' :
                setIcoName('alert-circle')
                setIsAbout(true);
                break;
            case 'help':
                setIcoName('help-circle')
                setIsHelp(true);
                break;
            case 'privacy' :
                setIcoName('lock')
                setIsPrivacy(true);
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
                    {isSetting ?
                    <View style={styles.switchContainer}>
                        <Text>Modo oscuro</Text>
                        <Switch
                            trackColor={{ false: "#BBBBBB", true: "#555555" }}
                            thumbColor={isEnabled ? "#252525" : "#EEEEF0"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View> : null}

                    {isPrivacy ?
                    <TouchableHighlight style={styles.botones} onPress={this}>
                        <Text>Cambiar contraseña</Text>
                    </TouchableHighlight> : null}

                    {isAbout ?
                    <TouchableHighlight style={styles.botones} onPress={()=> setModalVersion(true)}>
                        <Text>Versión de la Aplicación</Text>
                    </TouchableHighlight>: null}
                </View>
            }
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVersion}
                onRequestClose={() => {
                setModalVersion(!modalVersion);
            }}>
                <View>
                    <View style={styles.modalView}>
                        <Text></Text>
                        <Text style={styles.modalText}>Overlogic</Text>
                        <Text style={styles.modalText}>versión: 1.0.0</Text>
                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#202020" }}
                        onPress={() => {
                            setModalVersion(!modalVersion);
                        }}
                        >
                        <Text style={styles.textStyle}>X</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
Accordion.defaultProps = {
    title : 'Ajustes',
    data : 'simple acoordion'
}

export default Accordion;