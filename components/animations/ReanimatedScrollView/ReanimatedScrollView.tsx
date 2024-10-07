import { FC, forwardRef } from 'react';
import Reanimated, {
  runOnJS,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { ReanimatedScrollViewProps } from './ReanimatedScrollView.types';
import { useCombinedRefs } from '@/hooks/useCombinedRefs';

export const ReanimatedScrollView: FC<ReanimatedScrollViewProps> = forwardRef(
  (props, ref) => {
    const { children, onTranslate, style, ...rest } = props;

    const combinedRef = useCombinedRefs<Reanimated.ScrollView>(ref);

    const onScroll = useAnimatedScrollHandler((event) => {
      const { x, y } = event.contentOffset;
      if (onTranslate) {
        runOnJS(onTranslate)(x, y);
      }
    });

    return (
      <Reanimated.ScrollView
        {...rest}
        ref={combinedRef}
        onScroll={onScroll}
        style={style}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </Reanimated.ScrollView>
    );
  }
);

ReanimatedScrollView.displayName = 'ReanimatedScrollView';
