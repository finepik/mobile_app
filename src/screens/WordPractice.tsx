import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { theme } from "../theme/constants";
import { MediumText } from "../components/Text/MediumText";
import { useState } from "react";
import { ThinText } from "../components/Text/ThinText";
import { BaseButton } from "../components/Buttons/BaseButton";
import { BaseText } from "../components/Text/BaseText";

export const WordPracticeScreen = () => {
    const [word, setWord] = useState(-2)
    const [answer, setAnswer] = useState(-1)
    const rightWord = 2
    const title = 'gardener'
    const transcription = `[ 'gɑ:dnə ]`

    const words = [
        {
            id: 1,
            text: 'Муха'
        },
        {
            id: 2,
            text: 'Садовник'
        },
        {
            id: 3,
            text: 'Гладиолус'
        },
        {
            id: 4,
            text: 'Собака'
        },
    ]

    const setWordHandler = (id: number) => {
        console.log('word ', id)
        setWord(id)
    }

    const answerHandler = () => {
        if (word !== -2) {
            setAnswer(word)
        }
    }

    const nextHandler = () => {
        console.log('next')
        setAnswer(-1)
        setWord(-2)
    }

    const getWordColor = (id: number) => {
        if (answer === -1){
            if (word === id) return theme.colors.blue
            return theme.colors.gray
        }
        if (id === rightWord) return theme.colors.green
        if (word === id) return theme.colors.orange
        return theme.colors.gray
    }

    const wordItems = words.map(item => (
        <Pressable 
            style={{...styles.word, backgroundColor: getWordColor(item.id)}} 
            key={item.id} 
            onPress={() => setWordHandler(item.id)}
        >
            <Text style={{textAlign: 'center'}}><BaseText text={item.text}/></Text>
        </Pressable>
    ))

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MediumText text={'< Word practice'}/>
            </View>
            <View style={styles.content}>
                <View style={{marginVertical: 20}}>
                    <Text style={{textAlign: 'center'}}>
                        <BaseText text={title} />
                    </Text>
                    <ThinText text={transcription}/>
                </View>
                {wordItems}
            </View>
            <View style={{...styles.content, justifyContent: 'flex-end'}}>
                {answer === -1 && (
                        <BaseButton text={'Check'} onClick={answerHandler}/>
                    )}
                {answer !== -1 && (
                    <BaseButton text={'Next'} onClick={nextHandler}/>
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
    },
    word: {
        height: 60,
        borderRadius: 12,
        padding: 16,
        backgroundColor: theme.colors.gray,
        marginVertical: 8,
    }
})