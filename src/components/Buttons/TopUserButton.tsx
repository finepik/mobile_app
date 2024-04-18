import { Pressable, StyleSheet, Text } from "react-native"
import { theme } from "../../theme/constants"

interface TopUserButtonProps {
    icon: string
    name: string
    points: number
    onClick: () => void
}

export const TopUserButton = ({
    icon,
    name,
    points,
    onClick,
}: TopUserButtonProps) => {



    return (
        <Pressable style={styles.statsItem} onPress={onClick}>
            <Text style={styles.iconText}>{icon}</Text>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.pointsText}>{points} points</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    statsItem: {
        width: '100%',
        height: 54,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        padding: 12,
        borderRadius: 20,
        backgroundColor: theme.colors.gray
    },
    iconText: {
        fontSize: 24,
    },
    nameText: {
        fontSize: 17,
        fontWeight: '500',
    },
    pointsText: {
        fontSize: 17,
        fontWeight: '500'
    }
})