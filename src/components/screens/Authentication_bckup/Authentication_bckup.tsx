import * as React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {Container, Text, Button} from '@src/components/elements';
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

type AuthenticationProps = {};

const Authentication: React.FC<AuthenticationProps> = () => {
  const navigation = useNavigation();
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
          source={require('../../../assets/app/logo.png')}
          style={styles.appIcon}
        />

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

    </View>
  );
};

export default Authentication;
