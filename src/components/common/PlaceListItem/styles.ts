import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  placeInfoContainer: {
    flex: 1,
  },
  placeInfo: {
    marginTop: 5,
  },
  placeTitle: {
    fontWeight: 'bold',
  },
  placeSubTitle: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 12,
  },
});
