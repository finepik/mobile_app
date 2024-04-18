import { View } from 'react-native';
import { OnBoardingScreen } from './src/screens/Onboarding';
import { ProfileScreen } from './src/screens/Profile';
import { LanguageScreen } from './src/screens/Language';
import { HomeScreen } from './src/screens/Home';
import { AnimalsScreen } from './src/screens/Animals';
import { WordPracticeScreen } from './src/screens/WordPractice';
import { ListeningScreen } from './src/screens/Listening';
import { LoginScreen } from './src/screens/Login';
import { RegistrationScreen } from './src/screens/Register';

export default function App() {

    return (
      <View>
        <OnBoardingScreen/>
        <ProfileScreen/>
        <LanguageScreen/>
        <HomeScreen/>
        <AnimalsScreen/>
        <WordPracticeScreen/>
        <ListeningScreen/>
        <LoginScreen/>
        <RegistrationScreen/>
      </View>
    );  
}

