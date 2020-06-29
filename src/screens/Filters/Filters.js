import React from 'react';
import {View, Text } from 'react-native';
import Header from '../../components/Header';

const Filters = ({navigation})=>{
    return(
        <View style={{height: '100%', borderBottomColor: '#000000', borderBottomWidth: 2}}>
          <Header route='Filters' title="Filtros" handleOnBack={()=>navigation.goBack()}/>
        </View>
    );
}

export default Filters;