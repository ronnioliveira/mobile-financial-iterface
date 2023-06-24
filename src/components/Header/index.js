import { 
    Text, 
    View, 
    StyleSheet, 
    StatusBar,
    TouchableOpacity,
} from "react-native";

import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; 

export default function Header(props){

    return(
        <View style={styles.container}>
            <MotiView 
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0
                }}
                animate={{
                    translateY: 0,
                    opacity: 1
                }}
                transition={{
                    type:'timing',
                    duration: 800,
                    delay: 300
                }}
            >
                
                <MotiText 
                    style={styles.text}
                    from={{
                        translateX: -300,
                    }}
                    animate={{
                        translateX: 0,
                    }}
                    transition={{
                        type:'timing',
                        duration: 800,
                        delay: 300
                    }}
                >
                    {props.name}
                </MotiText>
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Feather name='user' size={27} color='#fff'/>
                </TouchableOpacity>            

            </MotiView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4e0b69',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 13,
        paddingEnd: 13,
        paddingBottom: 31
    },
    text:{
        color: '#fff',
        fontWeight: "bold",
        fontSize: 17

    },
    button:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44 / 2
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    }
})