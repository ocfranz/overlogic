import React from 'react';
import {View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import CardItem from '../../components/CardItem';
import CharacterCard from '../../components/CharacterCard';
const Filters = ({navigation})=>{
    const handleOnDeleteCard = ()=>{

    }
    return(
            <ScrollView>
            <View >
                <Header route='Filters' title="Filtros" handleOnBack={()=>navigation.goBack()}/>
                <View style={styles.wrapper}>
                    <Text style={styles.subtitle}>Mis cursos</Text>
                    <CardItem 
                        title="Mátematicas" 
                        subtitle= '14 formulas'
                        color= '#0067FD'
                        handleOnDelelete={()=>handleOnDeleteCard()}
                    />
                    <CardItem 
                        title="Mátematicas" 
                        subtitle= '14 formulas'
                        color= '#E66C6D'
                        handleOnDelelete={()=>handleOnDeleteCard()}
                    />
                    <CardItem 
                        type='add'
                        color= '#C4C4C4'
                        handleOnDelelete={()=>handleOnDeleteCard()}
                    />
                </View>
                <View>
                <View style={styles.wrapper}>
                    <Text style={styles.subtitle}>Mis personajes</Text>
                    <View style={{flexDirection : 'row', flexWrap : 'wrap'}}>
                        <CharacterCard name="Goku" selected={true}/>
                        <CharacterCard name="Goku"/>
                        <CharacterCard name="Goku"/>
                        <CharacterCard name="Goku"/>
                    </View>
                </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Filters;