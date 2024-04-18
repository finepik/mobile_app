import { StyleSheet, Text } from "react-native"
import { theme } from "../../theme/constants"
import { MyTextProps } from "./types";

const styles = StyleSheet.create({
    thinText: {
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: theme.colors.dark,
        opacity: 0.6,
    },
  });



export const ThinText = ({text}: MyTextProps) => {

    return (
        <Text
            style={styles.thinText}
        >
            {text}
        </Text>
    )
}