import React from 'react';
import { Image,  TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import Icon from "react-native-vector-icons/Feather";
import { colors } from '../../styles/colors';

const Header = ({route, title, handleOnBack, handleOnEdit, edit})=>{
    return (
        <View style={route == 'User'? styles.header_wrapper_user :styles.header_wrapper}>
            {
                route=='Filters' 
                && <>
                    <TouchableOpacity  activeOpacity={1} onPress={handleOnBack} style={{ justifyContent: 'center', position: 'absolute', left: 15, }}>
                            <View style={{flexDirection : 'row'}}>
                                <Icon name="chevron-left" size={30} color={colors.dark}></Icon>
                            </View>
                    </TouchableOpacity>
                    <Text style={styles.header_title}>{title}</Text>
                </>
            }
            {
                route=='User' 
                && <>
                    <View style={{flexDirection: 'row',   justifyContent:'space-between', width: '100%', paddingHorizontal: 21, }}>
                        <TouchableOpacity activeOpacity={1}  onPress={handleOnEdit} style={{ justifyContent: 'center'}}>
                            {
                                edit?<Icon name="check" size={20} color={colors.dark}></Icon>
                                :<Icon name="edit" size={20} color={colors.dark}></Icon>

                            }
                        </TouchableOpacity>
                        <TouchableOpacity  activeOpacity={1} onPress={handleOnBack} style={{ justifyContent: 'center'}}>
                            <View style={{flexDirection : 'row'}}>
                                <Icon name="chevron-right" size={30} color={colors.dark}></Icon>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    );
}
Header.defaultProps = {
    
}
export default Header;