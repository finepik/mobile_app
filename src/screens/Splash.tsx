import { Image, StyleSheet, View } from "react-native"
import { theme } from "../theme/constants";
import { Heading } from "../components/Text/Heading";

export const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icons/mainIcon.png')}/>
            <Heading text={'Language App'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    },
  });