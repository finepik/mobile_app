import { Image, Pressable, StyleSheet, Text } from "react-native"
import { theme } from "../../theme/constants"

export type GameIcon = 'coala' | 'pencil' | 'audio' | 'gamepad'

interface ExcersiseButtonProps {
    icon: GameIcon
    text: string
    bg: string
    onClick: () => void
}

export const ExcersiseButton = ({
    icon,
    text,
    bg = theme.colors.blue,
    onClick,
}: ExcersiseButtonProps) => {

    const getImage = (iconGame: GameIcon) => {
        switch (iconGame) {
            case 'pencil':
                
                return require('../../../assets/icons/pencil.png');
            case 'audio':
                
                return require('../../../assets/icons/audio.png');
            case 'gamepad':
                
                return require('../../../assets/icons/gamepad.png');
        
            default:
                return require('../../../assets/icons/coala.png');
        }
    }

    return (
        <Pressable 
            style={{...styles.card, backgroundColor: bg}} 
            onPress={onClick}
        >
            <Image source={getImage(icon)} width={100} height={100}/>
            <Text style={styles.text}>{text} </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 134,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        padding: 12,
        borderRadius: 20,
        backgroundColor: theme.colors.gray
    },
    text: {
        fontSize: 13,
        color: theme.colors.white,
        textAlign: 'center'
    }
})