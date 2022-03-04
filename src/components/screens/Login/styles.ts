import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    marginLeft: 10,
    fontSize: 36,
  },

  formContainer: {
    paddingTop: '20%',
    marginBottom: 30,
  },
  inputStyle: {
    marginTop: 50,
  },
  inputContainerStyle: {
    color: 'white',
    borderBottomWidth: 2,
    borderColor: 'white',
  },
  forgotPasswordButton: {
    marginLeft: 10,
  },
  signInButton: {
    marginTop: 15,
  },
  loginButton: {
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
});
