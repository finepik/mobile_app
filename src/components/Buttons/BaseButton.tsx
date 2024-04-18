import { Pressable, StyleSheet } from "react-native"
import { MediumText } from "../Text/MediumText"
import { theme } from "../../theme/constants"

interface BaseButtonProps {
    text: string,
    onClick: () => void
    disabled?: boolean
}

export const BaseButton = ({
    text,
    onClick,
    disabled=false
}: BaseButtonProps) => {

    const bg = disabled ? theme.colors.gray : theme.colors.blue

    return (
        <Pressable
            style={{...styles.baseButton, backgroundColor: bg}}
            onPress={onClick}
            disabled={disabled}
        >
            <MediumText text={text}/>
         </Pressable>
    )
}

const styles = StyleSheet.create({
    baseButton: {
        padding: 16,
        gap: 12,
        borderRadius: 12,
        width: '100%',
    },
  });