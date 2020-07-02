import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import CardItem from '../../components/CardItem';
import CharacterCard from '../../components/CharacterCard';
import SimpleModal from '../../components/Modal';

const Filters = ({navigation})=>{
    const [ visibleModal, setVisibleModal ] = useState(false);
    useEffect(()=>{
        console.log('LOADED');
    }, [])
    const handleOnDeleteCard = ()=>{
        console.log('helo')
    }
    const handleOnAddCard = ()=>{
        setVisibleModal(!visibleModal);
        console.log(!visibleModal);
    }
    const selectCharacter = ()=>{
        console.log('selected');
    }
    return(
            <ScrollView>
            <View>
                <Header route='Filters' title="Filtros" handleOnBack={()=>navigation.goBack()}/>
                <View style={styles.wrapper}>
                    <Text style={styles.subtitle}>Mis cursos</Text>
                    <CardItem 
                        title="Mátematicas" 
                        subtitle= '14 formulas'
                        color= '#0067FD'
                        handleOnEvent={()=>handleOnDeleteCard()}
                    />
                    <CardItem 
                        title="Mátematicas" 
                        subtitle= '14 formulas'
                        color= '#E66C6D'
                        handleOnEvent={()=>handleOnDeleteCard()}
                    />
                    <CardItem 
                        type='add'
                        color= '#C4C4C4'
                        handleOnEvent={()=>handleOnAddCard()}
                    />
                </View>
                <View>
                <View style={styles.wrapper}>
                    <Text style={styles.subtitle}>Mis personajes</Text>
                    <View style={{flexDirection : 'row', flexWrap : 'wrap'}}>
                        <CharacterCard name="Goku" selected={true} handleOnPress={()=>selectCharacter()}/>
                        <CharacterCard name="Goku" handleOnPress={()=>selectCharacter()}/>
                        <CharacterCard name="Goku" handleOnPress={()=>selectCharacter()}/>
                        <CharacterCard name="Goku" handleOnPress={()=>selectCharacter()}/>
                    </View>
                </View>
                </View>
            </View>
            <SimpleModal modalVisible={visibleModal}/>
        </ScrollView>
    );
}

export default Filters;