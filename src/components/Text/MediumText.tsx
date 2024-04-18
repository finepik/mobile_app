import { StyleSheet, Text } from "react-native"
import { theme } from "../../theme/constants"
import { MyTextProps } from "./types";

const styles = StyleSheet.create({
    mediumText: {
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: theme.colors.white,
        margin: 0,
    },
  });


export const MediumText = ({text}: MyTextProps) => {

    return (
        <Text
            style={styles.mediumText}
        >
            {text}
        </Text>
    )
}