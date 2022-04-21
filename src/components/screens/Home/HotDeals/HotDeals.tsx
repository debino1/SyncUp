import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Section, Container} from '@src/components/elements';
import {mockRemarkablePlace, Place} from '@src/data/mock-places';
import PlaceListItem from '@src/components/common/PlaceListItem';
import styles from './styles';

type HotDealsProps = {};

const HotDeals: React.FC<HotDealsProps> = () => {
  const navigation = useNavigation();

  const _onButtonActionPressed = () => {
    navigation.navigate('PlaceListScreen', {title: 'Hot Deals'});
  };

  return (
    <Section
      title="Popular Rooms"
      actionButtonText="View All"
      onButtonActionPressed={_onButtonActionPressed}>
      <Container style={styles.tabContent}>
        {mockRemarkablePlace.featured.map((item: Place) => {
          return <PlaceListItem key={item.id} data={item} />;
        })}
      </Container>
    </Section>
  );
};

export default HotDeals;
