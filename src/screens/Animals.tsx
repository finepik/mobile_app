import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { theme } from "../theme/constants";
import { MediumText } from "../components/Text/MediumText";
import { useState } from "react";
import { ThinText } from "../components/Text/ThinText";
import { BaseButton } from "../components/Buttons/BaseButton";
import { BaseText } from "../components/Text/BaseText";

export const AnimalsScreen = () => {
    const [text, setText] = useState('');
    const [answer, setAnswer] = useState('')
    const animal = 'enot'

    const answerHandler = () => {
        console.log('answer ', text)
        setAnswer(text)
        setText('')
    }

    const tryAgainHandler = () => {
        setAnswer('')
    }

    const nextHandler = () => {
        console.log('next')
        setAnswer('')
    }

    const getStep = () => {
        if (answer === animal) {
            const img = require('../../assets/icons/tada.png')
            return (
                <View style={styles.content}>
                    <Image style={styles.img} source={img} width={218} height={218}/>
                    <Text style={{textAlign: 'center'}}>
                        <BaseText text={`Holy Molly! That is Right!`} />
                    </Text>
                    <BaseButton text={'Next'} onClick={nextHandler}/>
                </View>
            )
        }
    
        if (answer !== animal && answer.length > 0) {
            const img = require('../../assets/icons/sad cat.png')
            return (
                <View style={styles.content}>
                    <Image style={styles.img} source={img} width={218} height={218}/>
                    <Text style={{textAlign: 'center'}}>
                        <BaseText text={`Eh? Wrong answer :(That is: ${animal}`} />
                    </Text>
                    <BaseButton text={'Next'} onClick={nextHandler}/>
                    <BaseButton text={'Try again'} onClick={tryAgainHandler}/>
                </View>
            )
        }
    
        if (answer.length === 0) {
            const img = require('../../assets/PAY-main 1.png')
            return (
                <View style={styles.content}>
                    <Image style={styles.img} source={img} width={318} height={318}/>
                    <Text style={styles.support}>Write who is on image ?</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type here to answer"
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                    />
                    <BaseButton text={'Check'} onClick={answerHandler}/>
                </View>
            )
        }
    }

    

    const headerBg = answer === animal ? 
    theme.colors.green : answer.length === 0 ? 
    theme.colors.deepBlue : 
    theme.colors.red

    return (
        <View style={styles.container}>
            <View style={{...styles.header, backgroundColor: headerBg}}>
                <MediumText text={'< Guess the animal'}/>
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
        gap: 12,
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    img: {
        borderRadius: 20, 
        width: 318, 
        height: 318
    },
    textInput: {
        height: 50, 
        backgroundColor: theme.colors.gray,
        borderRadius: 12,
        padding: 10,
    },
    support: {
        fontSize: 16,
        color: theme.colors.dark
    }
})