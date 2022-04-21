import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Carousel, Section, Card} from '@src/components/elements';
import {Dimensions} from 'react-native';
import {mockPlaces, Place} from '@src/data/mock-places';

type RecommendedPlacesProps = {};

const RecommendedPlaces: React.FC<RecommendedPlacesProps> = () => {
  const navigation = useNavigation();

  const _onButtonActionPressed = () => {
    navigation.navigate('PlaceListScreen', {title: 'Recommended'});
  };

  const _onPlaceItemPressed = () => {
    navigation.navigate('PlaceDetailsScreen');
  };

  return (
    <Section
      title="New Rooms"
      actionButtonText="View All"
      onButtonActionPressed={_onButtonActionPressed}>
      <Carousel
        data={mockPlaces}
        itemWidth={Dimensions.get('window').width / 2 - 15}
        renderContent={(item: Place) => {
          const {image, title} = item;
          return (
            <Card
              // eslint-disable-next-line react-native/no-inline-styles
              style={{backgroundColor: 'grey'}}
              coverImage={image}
              isSmallCover
              title={title}
              onPress={_onPlaceItemPressed}
            />
          );
        }}
      />
    </Section>
  );
};

export default RecommendedPlaces;
