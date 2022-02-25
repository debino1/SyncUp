import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
  },
  appIcon: {
    width: '70%',
    height: '40%',
  },
  loginMethodContainer: {
    padding: 30,
    paddingBottom: 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "transparent",
  },
  introductionText: {
    marginTop: 30,
    fontSize: 16,
  },
  iconsContainer: {
    marginTop: 30,
    justifyContent:'center',
    flexDirection:'row', 
  },
  button:{
    borderWidth: 3,
    borderColor: 'white',
    borderRadius:60,
    backgroundColor: "transparent",
    paddingTop: 10,
    paddingBottom: 13,
    margin: 10,
  },
  icon: {
    margin: 5,
  },
  loginMethod: {
    marginTop: 10,
  },
});
