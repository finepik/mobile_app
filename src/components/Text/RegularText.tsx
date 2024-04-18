import { StyleSheet, Text } from "react-native"
import { theme } from "../../theme/constants"
import { MyTextProps } from "./types";

const styles = StyleSheet.create({
    regularText: {
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: theme.colors.dark,
    },
  });


export const RegularText = ({text}: MyTextProps) => {

    return (
        <Text
            style={styles.regularText}
        >
            {text}
        </Text>
    )
}