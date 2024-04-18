import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { theme } from "../theme/constants"
import { useState } from "react";
import { MediumText } from "../components/Text/MediumText";
import { BaseText } from "../components/Text/BaseText";
import { BaseButton } from "../components/Buttons/BaseButton";


export const LoginScreen = () => {

    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const loginClick = () => {
        console.log('login')
    }

    return (
        <View style={styles.container}>
            <View style={{...styles.header}}>
                <MediumText text={'< Login'}/>
            </View>
            <View style={styles.content}>
                <Image style={styles.img} source={require('../../assets/LearnAtHome.png')}/>
                <Text style={{textAlign: 'center', width: '80%', marginBottom: 20}}>
                    <BaseText text={'For free, join now and start learning'}/>
                </Text>
                <Text style={styles.label}>Email Adress</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={newText => setLogin(newText)}
                    defaultValue={login}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    textContentType='password'
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}
                />
                <View style={{...styles.content, gap:20}}>
                    <BaseButton text={'Login'} onClick={loginClick}/>
                    <Text style={{textAlign: 'center', fontSize: 16}}>
                        Not you member? Signup
                    </Text>
                    <Text style={{textAlign: 'center', fontSize: 16}}>
                        Use can use  Google for sign in 
                    </Text>
                </View>
                
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    header: {
        height: 92,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingVertical: 20,
        paddingHorizontal: 24,
        gap: 6,
        backgroundColor: theme.colors.deepBlue
    },
    content: {
        flex: 1,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    img: {
        marginVertical: 20, 
        width: 105, 
        height: 82
    },
    textInput: {
        height: 50, 
        backgroundColor: theme.colors.gray,
        borderRadius: 12,
        padding: 10,
        width: '100%',
    },
    label: {
        fontSize: 15,
        color: theme.colors.dark,
        textAlign: 'left',
        width: '100%',
    }
})