import { StyleSheet, View } from "react-native"
import { theme } from "../theme/constants";
import { MediumText } from "../components/Text/MediumText";
import { BaseButton } from "../components/Buttons/BaseButton";
import { LanguageButton } from "../components/Buttons/LanguageButton";
import { BaseText } from "../components/Text/BaseText";

export const LanguageScreen = () => {

    const languages = [
        {
            data: 'Russian',
            isSelected: true
        },
        {
            data: 'English',
            isSelected: false
        },
        {
            data: 'Chinese',
            isSelected: false
        },
        {
            data: 'Belarus',
            isSelected: false
        },
        {
            data: 'Kazakh',
            isSelected: false
        },
    ]

    const clickHandler = () => {
        console.log('hello')
    }

    const languageItems = languages.map(item => (
        <LanguageButton 
            key={item.data}
            text={item.data} 
            onClick={clickHandler} 
            isActive={item.isSelected}
        />
    ))

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MediumText text={"Language select"}/>
            </View>
            <View style={styles.buttonContainer}>
                <BaseText text="What is your Mother language?"/>
                {languageItems}
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
        height: 102,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 24,
        backgroundColor: theme.colors.deepBlue
    },
    buttonContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 12,
        padding: 18,
    }
  });