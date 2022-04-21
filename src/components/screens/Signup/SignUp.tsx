import * as React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
import {Text, Button} from '@src/components/elements';
import styles from './styles';
import AuthContext from '@src/context/auth-context';
import {useNavigation} from '@react-navigation/native';
import {Input} from 'react-native-elements';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const navigation = useNavigation();
  const {signIn} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const _onEmailFieldChange = (value: string) => {
    setEmail(value);
  };
  const _onPasswordFieldChange = (value: string) => {
    setPassword(value);
  };

  const _onNextButtonPressed = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email!');
      return;
    } else if (!password) {
      Alert.alert('Error', 'Please enter your password!');
      return;
    }
    signIn();
  };
  const _onForgotPasswordButtonPressed = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <ImageBackground
      source={require('../../../assets/app/background_login.png')}
      resizeMode="cover"
      style={styles.backgroundContainer}>
      <SafeAreaView style={styles.root}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.formContainer}>
            <Text isBold isHeadingTitle isWhite style={styles.title}>
              Log In
            </Text>
            <Input
              label="Username"
              labelStyle={{color: 'white'}}
              placeholder="Enter your username"
              placeholderTextColor="white"
              inputStyle={{color: 'white'}}
              rightIcon={{
                type: 'ionicon',
                name: 'person-circle-outline',
                color: 'white',
              }}
              value={email}
              onChangeText={_onEmailFieldChange}
              autoCompleteType={email}
              containerStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <Input
              label="Password"
              labelStyle={{color: 'white'}}
              placeholder="Enter your password"
              placeholderTextColor="white"
              inputStyle={{color: 'white'}}
              rightIcon={{type: 'ionicon', name: 'key', color: 'white'}}
              value={password}
              onChangeText={_onPasswordFieldChange}
              autoCompleteType={password}
              secureTextEntry={true}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <Text
              isWhite
              onPress={_onForgotPasswordButtonPressed}
              style={styles.forgotPasswordButton}>
              Forgot Password
            </Text>
          </View>
          <Button
            isFullWidth
            onPress={_onNextButtonPressed}
            style={styles.loginButton}>
            <Text isBold isWhite>
              Login
            </Text>
          </Button>
          <Button
            isFullWidth
            isTransparent
            onPress={_onForgotPasswordButtonPressed}
            style={styles.signInButton}>
            <Text isBold isWhite>
              Sign Up
            </Text>
          </Button>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
