import { Pressable, StyleSheet, Text, View } from "react-native"
import { theme } from "../theme/constants";
import { MediumText } from "../components/Text/MediumText";
import { BaseText } from "../components/Text/BaseText";
import { RegularText } from "../components/Text/RegularText";
import { TopUserButton } from "../components/Buttons/TopUserButton";
import { ExcersiseButton, GameIcon } from "../components/Buttons/ExcersiseButton";

interface gameData {
    text: string
    icon: GameIcon
    bg: string
}

export const HomeScreen = () => {

    const name = 'Emil'

    const title = 'Are you ready for learning today?'

    const topUsers = [
        {
            icon: '👨🏻‍🎨',
            name: 'Vincent van Gogh',
            points: 12
        },
        {
            icon: '👨🏻‍🔬',
            name: 'Mendeleev',
            points: 10
        },
        {
            icon: '🧛🏻‍♂️',
            name: 'Vlad Tepes ',
            points: 8
        },
    ]

    const games: gameData[] = [
        {
            text: 'Guess the animal',
            icon: 'coala',
            bg: theme.colors.blue
        },
        {
            text: 'Word practice',
            icon: 'pencil',
            bg: theme.colors.red
        },
        {
            text: 'Audition',
            icon: 'audio',
            bg: theme.colors.orange
        },
        {
            text: 'Game',
            icon: 'gamepad',
            bg: theme.colors.green
        },
    ]
    

    const clickHandler = () => {
        console.log('hello')
    }

    const topUserItems = topUsers.map(user => (
        <TopUserButton key={user.name} {...user} onClick={clickHandler}/>
    ))

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}/>
                <MediumText text={`Hello ${name}`}/>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.content}>
                <BaseText text={'Top users'}/>
                {topUserItems}
                <BaseText text={'Excersises'}/>
                <View style={styles.gameRow}>
                    <ExcersiseButton {...games[0]} onClick={clickHandler}/>
                    <ExcersiseButton {...games[1]} onClick={clickHandler}/>
                </View>
                <View style={styles.gameRow}>
                    <ExcersiseButton {...games[2]} onClick={clickHandler}/>
                    <ExcersiseButton {...games[3]} onClick={clickHandler}/>
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
        height: 175,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 24,
        gap: 6,
        backgroundColor: theme.colors.deepBlue
    },
    text: {
        color: theme.colors.gray,
        fontSize: 16,
        opacity: 0.8,
    },
    logo: {
        borderRadius: 40,
        width: 54,
        height: 54,
        backgroundColor: theme.colors.gray,
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
        paddingVertical: 6,
    },
    gameRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
        justifyContent: 'space-around',
    }
  });