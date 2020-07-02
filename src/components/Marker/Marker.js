import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../styles/colors';

const Marker = ({ top, left, width, height, value}) =>{
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
        </View>
        <Text style={{position: 'absolute', left: 100, top: 200, fontFamily: 'gilroy_bold', color: colors.yellow_overlogic, fontSize: 18}}>{value}</Text>
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