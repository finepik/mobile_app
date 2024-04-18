import { StyleSheet, Text } from "react-native"
import { theme } from "../../theme/constants"
import { MyTextProps } from "./types";

const styles = StyleSheet.create({
    heading: {
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 36,
        lineHeight: 42,
        textAlign: 'center',
        color: theme.colors.white,
    },
  });

export const Heading = ({text}: MyTextProps) => {

    return (
        <Text
            style={styles.heading}
        >
            {text}
        </Text>
    )
}