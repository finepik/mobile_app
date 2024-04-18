import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { theme } from "../theme/constants";
import { MediumText } from "../components/Text/MediumText";
import { useState } from "react";
import { ThinText } from "../components/Text/ThinText";
import { BaseButton } from "../components/Buttons/BaseButton";
import { BaseText } from "../components/Text/BaseText";

export const ListeningScreen = () => {
    const [answer, setAnswer] = useState('')
    const rightWord = 'cucumber'
    const title = 'cucumber'
    const transcription = `[ 'kju:kʌmbə ]`

    const answerHandler = () => {
        setAnswer(rightWord + '1')
    }

    const nextHandler = () => {
        console.log('next')
        setAnswer('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MediumText text={'< Listening'}/>
            </View>
            <View style={styles.content}>
                <View style={{marginVertical: 20}}>
                    <Text style={{textAlign: 'center'}}>
                        <BaseText text={title} />
                    </Text>
                    <ThinText text={transcription}/>
                </View>
                <Text style={{textAlign: 'center'}}>
                    <BaseText text={`Please press button and say this word. Our service will check your pronunciation `} />
                </Text>
                {answer !== '' && (
                    <View style={styles.answerCard}>
                        <Text style={{color: answer === rightWord ? theme.colors.green : theme.colors.red}}>
                            {answer}
                        </Text>
                    </View>
                )}
            </View>
            <View style={{...styles.content, justifyContent: 'flex-end'}}>
                {answer === '' && (
                        <BaseButton text={'Check my speech'} onClick={answerHandler}/>
                    )}
                {(answer !== '' && answer === rightWord) &&  (
                    <BaseButton text={'Next'} onClick={nextHandler}/>
                )}
                {(answer !== '' && answer !== rightWord) &&  (
                    <BaseButton text={'Train again'} onClick={nextHandler}/>
                )}
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
        gap: 12,
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    support: {
        fontSize: 16,
        color: theme.colors.dark
    },
    answerCard: {
        borderRadius: 12, 
        backgroundColor: theme.colors.gray, 
        height: 48,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 12
    }
})