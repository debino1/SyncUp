import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Carousel, Section, FeedButton} from '@src/components/elements';
import {Dimensions} from 'react-native';
import {mockPlaces, Place} from '@src/data/mock-places';

type FeedButtonsProps = {};

const FeedButtons: React.FC<FeedButtonsProps> = () => {
  const navigation = useNavigation();

  const _onButtonActionPressed = () => {
    navigation.navigate('PlaceListScreen', {title: 'Recommended'});
  };

  const _onPlaceItemPressed = () => {
    navigation.navigate('PlaceDetailsScreen');
  };

  return (
    <Section
      actionButtonText="View All"
      onButtonActionPressed={_onButtonActionPressed}> 
      <Carousel
        data={mockPlaces}
        itemWidth={Dimensions.get('window').width / 2 - 15}
        renderContent={(item: Place) => {
          const {title} = item;
          return ( 
            <FeedButton
              // eslint-disable-next-line react-native/no-inline-styles
              style={{backgroundColor: '#EF3F61'}}
              title={title}
              onPress={_onPlaceItemPressed}
            />
          );
        }}
      />
    </Section>
  );
};

export default FeedButtons;
