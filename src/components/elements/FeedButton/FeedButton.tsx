import * as React from 'react';
import {
  ViewProps,
  StyleProp,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Touchable from '../Touchable';
import Container from '../Container';
import Text from '../Text';
import styles from './styles';
import {AdditionalParallaxProps} from 'react-native-snap-carousel';

type OwnProps = {
  coverImage?: ImageSourcePropType;
  title?: string;
  subTitle?: string;
  parallaxProps?: AdditionalParallaxProps;
  isSmallCover?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

type FeedButtonProps = OwnProps & ViewProps;

const FeedButton: React.FC<FeedButtonProps> = ({
  title,
  onPress,
  titleStyle,
  style,
  ...rest
}) => {
  const {
    colors: {card},
  } = useTheme();

  const _renderCard = () => {
    return (
      <Container
        style={[{backgroundColor: card}, styles.button, style]}
        {...rest}>
        <Container style={styles.buttonBody}>
          {title && (
            <Text numberOfLines={1} style={[styles.buttonTitle, titleStyle]}>
              {title}
            </Text>
          )}
        </Container>
      </Container>
    );
  };

  return onPress ? (
    <Touchable onPress={onPress}>{_renderCard()}</Touchable>
  ) : (
    _renderCard()
  );
};

export default FeedButton;
