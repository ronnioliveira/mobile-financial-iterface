import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { AnimatePresence, MotiText} from 'moti'

export default function Statement(props){

    const [showValue, setShowValue] = useState(true);

    return(
        <TouchableOpacity activeOpacity={0.7} style={styles.statementContent} onPress={() => setShowValue(!showValue)}>
            
            <Text style={styles.statementDate}>{props.data.date}</Text>
            
            <View style={styles.statementLabelValue}>
                <Text style={styles.statementLabel}>{props.data.label}</Text>
                
                {showValue ? (
                    <AnimatePresence exitBeforeEnter>
                        <MotiText 
                            style={props.data.type === 1 ? styles.statementRevenue : styles.statementExpenses}
                            from={{
                                translateX: 100
                            }}
                            animate={{
                                translateX: 0
                            }}
                            transition={{
                                type:'timing',
                                delay: 100,
                                duration: 300
                            }}
                        >
                            {props.data.type === 1 ? `R$ ${props.data.value}` : `R$ -${props.data.value}`}
                        </MotiText>
                    </AnimatePresence>
                    ) : (
                        <View style={styles.hideBar}/>
                    )
                }
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    statementContent:{
        flex: 1, //pra ocupar o tamanho todo
        marginBottom: 11,
        borderBottomWidth: 0.5,
        borderBottomColor: "#9271d9",

    },
    statementDate:{
        color:"#9271d9",
        fontWeight: 'bold'
    },
    statementLabelValue:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    statementLabel:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    statementRevenue:{
        flexDirection: 'row',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#039487'
    },
    statementExpenses:{
        flexDirection: 'row',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f81404'
    },
    hideBar: {
        width: 80,
        height: 7,
        backgroundColor: "#9271d9",
        borderRadius: 5,
        marginTop: 7
    }
})