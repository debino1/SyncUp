import * as React from 'react';
import {useFocusEffect, useScrollToTop} from '@react-navigation/native';
import {ScrollView, SafeAreaView, InteractionManager} from 'react-native';
import {SearchBar, LoadingIndicator} from '@src/components/elements';
import RecommendedPlaces from './RecommendedPlaces';
import HotDeals from './HotDeals';
import AppReviewModal from '@src/components/common/AppReviewModal';

type RoomsProps = {};

const Rooms: React.FC<RoomsProps> = () => {
  const [isNavigationTransitionFinished, setIsNavigationTransitionFinished] =
    React.useState(false);
  const scrollViewRef = React.useRef(null);

  useScrollToTop(scrollViewRef);

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setIsNavigationTransitionFinished(true);
      });
      return () => task.cancel();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView ref={scrollViewRef} stickyHeaderIndices={[0]}>
        <SearchBar placeholder="Find places, dishes, restaurants..." />
        {isNavigationTransitionFinished ? (
          <>
            <RecommendedPlaces />
            <HotDeals />
          </>
        ) : (
          <LoadingIndicator size="large" hasMargin />
        )}
      </ScrollView>
      <AppReviewModal daysBeforeReminding={1} />
    </SafeAreaView>
  );
};

export default Rooms;
