import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default function Balance(props){
    return(
        <View style={styles.container}>

            <View style={styles.balanceContainer}>
                <Text style={styles.balanceTitle}>Saldo</Text>
                <View style={styles.balanceContent}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>
                        {props.balance}
                    </Text>
                </View>
            </View>
            
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceTitle}>Gastos</Text>
                <View style={styles.balanceContent}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>
                        {props.expenses}
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingStart: 17,
        paddingEnd: 17,
        backgroundColor: '#fff',
        marginStart: 13,
        marginEnd: 13,
        marginTop: -17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        paddingTop: 17,
        paddingBottom: 17
    },
    balanceTitle: {
        fontSize: 17,
        color: "#9271d9"
    },
    balanceContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol: {
        marginEnd: 3,
        color: "#9271d9",
    },
    balance:{
        color: '#039487',
        fontSize: 21
    },
    expenses:{
        color: '#f81404',
        fontSize: 21
    }
})