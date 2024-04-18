import { Pressable, StyleSheet } from "react-native"
import { theme } from "../../theme/constants"
import { BaseText } from "../Text/BaseText"

interface LanguageButtonProps {
    text: string,
    onClick: () => void
    isActive: boolean
}

export const LanguageButton = ({
    text,
    onClick,
    isActive=false
}: LanguageButtonProps) => {

    const bg = isActive ? theme.colors.orange : theme.colors.apricot

    return (
        <Pressable
            style={{...styles.languageButton, backgroundColor: bg}}
            onPress={onClick}
        >
            <BaseText text={text}/>
         </Pressable>
    )
}

const styles = StyleSheet.create({
    languageButton: {
        padding: 16,
        gap: 12,
        borderRadius: 20,
        width: '100%',
        height: 67,
        textAlign: 'left',
    },
  });