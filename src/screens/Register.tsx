import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { theme } from "../theme/constants"
import { useState } from "react";
import { MediumText } from "../components/Text/MediumText";
import { BaseText } from "../components/Text/BaseText";
import { BaseButton } from "../components/Buttons/BaseButton";

export const RegistrationScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('')
    const [step, setStep] = useState(0)

    const nextClick = () => {
        setStep(1)
    }

    const registrationClick = () => {
        console.log('Registration')
        console.log(firstName, secondName, email, password, confirmPassword)
        setStep(0)
        setFirstName('')
        setPassword('')
        setConfirmPassword('')
        setSecondName('')
        setEmail('')
    }

    const getStep = () => {
        if (step === 0) {
            return (
            <View style={styles.content}>
                <Image style={styles.img} source={require('../../assets/LearnAtHome.png')}/>
                <Text style={{textAlign: 'center', width: '80%', marginBottom: 20}}>
                    <BaseText text={'Create an Account'}/>
                </Text>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    onChangeText={newText => setFirstName(newText)}
                    defaultValue={firstName}
                />
                <Text style={styles.label}>Second Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Second Name"
                    onChangeText={newText => setSecondName(newText)}
                    defaultValue={secondName}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={newText => setEmail(newText)}
                    defaultValue={email}
                />
                <View style={{...styles.content, gap:20}}>
                    <BaseButton text={'Continue'} onClick={nextClick}/>
                    <Text style={{textAlign: 'center', fontSize: 16}}>
                        Already you member? Login
                    </Text>
                </View>
                
            </View>
            )
        }
        return (
            <View style={styles.content}>
            <Image style={styles.img} source={require('../../assets/LearnAtHome.png')}/>
            <Text style={{textAlign: 'center', width: '80%', marginBottom: 20}}>
                <BaseText text={'Create an Account'}/>
            </Text>
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                textContentType='password'
                onChangeText={newText => setPassword(newText)}
                defaultValue={password}
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Confirm Password"
                textContentType='password'
                onChangeText={newText => setConfirmPassword(newText)}
                defaultValue={confirmPassword}
            />
            <View style={{...styles.content, gap:20}}>
                <BaseButton text={'Signup'} onClick={registrationClick}/>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                    Already you member? Login
                </Text>
            </View>
            
        </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{...styles.header}}>
                <MediumText text={'< Signup'}/>
            </View>
            {getStep()}
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