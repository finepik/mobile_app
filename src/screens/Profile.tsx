import { Image, StyleSheet, Text, View } from "react-native"
import { theme } from "../theme/constants";
import { Heading } from "../components/Text/Heading";
import { RegularText } from "../components/Text/RegularText";
import { MediumText } from "../components/Text/MediumText";
import { BaseButton } from "../components/Buttons/BaseButton";

export const ProfileScreen = () => {

    const name = 'Emil'

    const clickHandler = () => {
        console.log('hello')
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.logo}>👨‍💻</Text>
                <MediumText text={`Your profile, ${name}`}/>
            </View>

            <View style={styles.buttonContainer}>
                <BaseButton text="Switch to Dark" onClick={clickHandler}/>
                <BaseButton text="Change mother language" onClick={clickHandler}/>
                <BaseButton text="Change your image" onClick={clickHandler}/>
                <BaseButton text="Logout" onClick={clickHandler} disabled={true}/>
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
        height: 230,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 24,
        backgroundColor: theme.colors.deepBlue
    },
    logo: {
        width: 134,
        height: 134,
        borderRadius: 67,
        backgroundColor: theme.colors.green,
        fontSize: 80,
        textAlign: 'center',
        paddingTop: 10,
        marginBottom: 15,
    },
    buttonContainer: {
        flex: 1,
        height: '100%',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 16,
        paddingVertical: 24,
    }
  });