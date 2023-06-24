import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'

import { AntDesign, FontAwesome } from '@expo/vector-icons'

export default function Actions(){
    return(
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            
            <TouchableOpacity style={styles.buttonArea} activeOpacity={0.5}>
                <View style={styles.actionButton}>
                    <AntDesign name='addfolder' size={26} color='#4e0b69'/>
                </View>
                <Text style={styles.buttonLabel}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonArea} activeOpacity={0.5}>
                <View style={styles.actionButton}>
                    <AntDesign name='tagso' size={26} color='#4e0b69'/>
                </View>
                <Text style={styles.buttonLabel}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonArea} activeOpacity={0.5}>
                <View style={styles.actionButton}>
                    <AntDesign name='creditcard' size={26} color='#4e0b69'/>
                </View>
                <Text style={styles.buttonLabel}>Carteira</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonArea} activeOpacity={0.5}>
                <View style={styles.actionButton}>
                    <AntDesign name='barcode' size={26} color='#4e0b69'/>
                </View>
                <Text style={styles.buttonLabel}>Boleto</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonArea} activeOpacity={0.5}>
                <View style={styles.actionButton}>
                    <AntDesign name='setting' size={26} color='#4e0b69'/>
                </View>
                <Text style={styles.buttonLabel}>Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonArea} activeOpacity={0.5}>
                <View style={styles.actionButton}>
                    <FontAwesome name='money' size={26} color='#4e0b69'/>
                </View>
                <Text style={styles.buttonLabel}>Emprestimo</Text>
            </TouchableOpacity>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 17,
        marginBottom: 13,
        maxHeight: 84,
        paddingStart: 13,
        paddingEnd: 13
    },
    buttonArea:{
        alignItems: 'center',
        marginRight: 32
    },
    actionButton: {
        backgroundColor: 'rgba(255,255,255, 0.5)',
        height: 48,
        width: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center'
    

    },
    buttonLabel:{
        marginTop: 4,
        textAlign: 'center'
    }
})