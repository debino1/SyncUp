import * as React from 'react';
import {useFocusEffect, useScrollToTop} from '@react-navigation/native';
import {ScrollView, SafeAreaView, InteractionManager} from 'react-native';
import {SearchBar, LoadingIndicator} from '@src/components/elements';
import HotDeals from './HotDeals';
import AppReviewModal from '@src/components/common/AppReviewModal';
import PopularCategories from './PopularCategories';
import PopularPlaces from './PopularPlaces';
import FeedButtons from './FeedButtons';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
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
            <FeedButtons />
            <PopularCategories />
            <PopularPlaces />
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

export default Home;
