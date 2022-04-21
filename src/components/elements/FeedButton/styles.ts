import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  button: {
    // backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  buttonBody: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  buttonTitle: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});
