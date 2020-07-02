import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../styles/colors';

const Marker = ({ top, left, width, height, value, handleOnClick}) =>{
    return(
        <>
       <View style={{ 
            borderWidth : 2,
            backgroundColor: 'tranparent', 
            borderColor : colors.yellow_overlogic, 
            position : 'absolute', 
            top: top, 
            left : left, 
            width: width, 
            height: height}}
        >
            <Text style={{ fontFamily: 'gilroy_regular', color: colors.yellow_overlogic, fontSize: 15}}>{value}</Text>
            </View>
        </>
    )
}

Marker.defaultProps = {
    top: 200,
    left : 100,
    width: 150,
    height: 40
}

export default Marker;