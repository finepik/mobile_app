import { StyleSheet, Text } from "react-native"
import { theme } from "../../theme/constants"
import { MyTextProps } from "./types";

const styles = StyleSheet.create({
    baseText: {
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0.01,
        color: theme.colors.dark,
    },
  });


export const BaseText = ({text}: MyTextProps) => {

    return (
        <Text
            style={styles.baseText}
        >
            {text}
        </Text>
    )
}