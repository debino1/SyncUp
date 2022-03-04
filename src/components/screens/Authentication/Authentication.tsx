import * as React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {Container, Text, Button} from '@src/components/elements';
<<<<<<< HEAD
=======
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
>>>>>>> 3a7e481e0ef3b597573368a672189388c9262671
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

type AuthenticationProps = {};

const Authentication: React.FC<AuthenticationProps> = () => {
  const navigation = useNavigation();
<<<<<<< HEAD

  const _loginScreenButtonPressed = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/app/background_1.png')}
        resizeMode="cover"
        style={styles.backgroundContainer}>
        <Image
=======
  const {primary} = useThemeColors();
  const {signIn} = React.useContext(AuthContext);

  const _onConnectWithPhoneNumberButtonPressed = () => {
    navigation.navigate('AuthWithPhoneNumberScreen');
  };
  const _onSocialNetworkConnectButtonPressed = () => {
    signIn();
  };
 

  return (
    <View
      style={ styles.container}>
      <ImageBackground 
        source={require('../../../assets/app/background_1.png')} 
        resizeMode="cover" 
        style={styles.backgroundContainer}>
                  <Image
>>>>>>> 3a7e481e0ef3b597573368a672189388c9262671
          source={require('../../../assets/app/logo.png')}
          style={styles.appIcon}
        />

<<<<<<< HEAD
        <Container style={styles.loginMethodContainer}>
          <Text isBold isHeadingTitle isWhite isCenter style={styles.title}>
            Music Speaks
          </Text>
          <Text isSecondary isWhite isCenter style={styles.introductionText}>
            Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo.
            Vestibulum pellentesque lacinia eleifend quis nostrud exercitation.
          </Text>
          <View style={styles.iconsContainer}>
            <Button style={styles.button}>
              <Icon name="sound" size={45} color="white" style={styles.icon} />
            </Button>
            <Button style={styles.button}>
              <Icon name="heart" size={45} color="white" style={styles.icon} />
            </Button>
            <Button style={styles.button}>
              <Ionicons
                name="musical-note"
                size={40}
                color="white"
                style={styles.icon}
              />
            </Button>
          </View>
          <View style={styles.loginMethod}>
            <Button
              isFullWidth
              isTransparent
              onPress={_loginScreenButtonPressed}>
              <Text isBold isWhite>
                SKIP
              </Text>
            </Button>
          </View>
        </Container>
      </ImageBackground>
=======
      <Container style={styles.loginMethodContainer} >
        <Text isBold isHeadingTitle isWhite isCenter style={styles.title}>
         Music Speaks
        </Text>
        <Text isSecondary isWhite isCenter style={styles.introductionText}>
        Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend quis nostrud exercitation.
        </Text>
        <View style={styles.iconsContainer}>
       <Button style={styles.button}><Icon name='sound' size={45} color='white' style={styles.icon}/></Button> 
       <Button style={styles.button}><Icon name='heart' size={45} color='white' style={styles.icon}/></Button> 
       <Button style={styles.button}><Ionicons name='musical-note' size={40} color='white' style={styles.icon}/></Button> 
        </View> 
        <View style={styles.loginMethod}>
          <Button
            isFullWidth
            isTransparent
            onPress={_onConnectWithPhoneNumberButtonPressed}>
            <Text isBold isWhite>
              SKIP
            </Text>
          </Button>
          
        </View>
      </Container>
      </ImageBackground>

>>>>>>> 3a7e481e0ef3b597573368a672189388c9262671
    </View>
  );
};

export default Authentication;
