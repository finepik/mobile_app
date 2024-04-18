import { Image, StyleSheet, Text, View } from "react-native"
import { theme } from "../theme/constants";
import { useState } from "react";
import { BaseText } from "../components/Text/BaseText";
import { ThinText } from "../components/Text/ThinText";
import { BaseButton } from "../components/Buttons/BaseButton";

const MAX_STEP = 2 // from 0 to 2 include both


export const OnBoardingScreen = () => {

    const [slide, setSlide] = useState(0)

    const imgs = [
        '../../assets/onbording1.png',
        '../../assets/onbording2.png',
        '../../assets/onbording3.png',
    ]

    const headings = [
        'Confidence in your words',
        'Take your time to learn',
        'The lessons you need to learn',
    ]

    const text = [
        `With conversation-based learning, you'll be talking from lesson one`,
        'Develop a habit of learning and make it a part of your daily routine',
        'Using a variety of learning styles to learn and retain',
    ]

    const buttonText = [
        'Next',
        'More',
        'Choose a language',
    ]

    const clickhandler = () => {
        if (slide < MAX_STEP) {
            setSlide(slide + 1)
            console.log('change slide', slide)
        }
        else setSlide(0)
    }

    const imgSource = slide === 0 ? 
    require('../../assets/onbording1.png') : slide === 1 ? 
    require('../../assets/onbording2.png') : 
    require('../../assets/onbording3_light.png')

    const getMarginTop = () => {
        switch (slide) {
            case 0:
                return 170;
            case 1:
                return 135;
            case 2:
                return 155;
            default:
                return 170;
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={{marginTop: getMarginTop(), marginBottom: 80}}
                source={imgSource}
            />
            <View style={styles.container}>
                <View style={styles.pagginator}>
                    <PagginationDot isActive={slide === 0}/>
                    <PagginationDot isActive={slide === 1}/>
                    <PagginationDot isActive={slide === MAX_STEP}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{textAlign: 'center'}}>
                        <BaseText text={headings[slide]}/>
                    </Text>
                    
                    <ThinText text={text[slide]}/>
                </View>
                <View style={{width: 300, marginVertical: 20}}>
                    <BaseButton text={buttonText[slide]} onClick={clickhandler}/>
                </View>
                
                <ThinText text={'Skip onboarding'}/>
            </View>
        </View>
    )
}

const PagginationDot = ({isActive}: {isActive: boolean}) => {
    const bg = isActive ? theme.colors.orange : theme.colors.gray
    return (
        <View style={{...styles.pagginationDot, backgroundColor: bg}}/>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    pagginationDot: {
        width: 8,
        height: 8,
        margin: 6,
        borderRadius: 8,
        backgroundColor: theme.colors.gray
    },
    pagginator: {
        display: 'flex',
        flexDirection: 'row',
        gap: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    textContainer: {
        marginBottom: 24, 
        width: 300, 
        gap:12,
    }
  });