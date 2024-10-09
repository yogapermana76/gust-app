import React, { useLayoutEffect } from 'react';
import { useNavigation } from 'expo-router';
import {
  Column,
  ContainerConfigProps,
  Header,
  HeaderProps,
} from '@/components/cores';

/**
 * A hook that can be used to easily set the Header of a react-navigation screen from within the screen's component.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Utils-useHeader.md)
 */
export function useHeader(
  headerProps: HeaderProps,
  deps: Parameters<typeof useLayoutEffect>[1] = [],
  children?: React.ReactNode,
  containerProps: ContainerConfigProps = {}
) {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <Column contentStyle="fitContent" {...containerProps}>
          <Header {...headerProps} />
          {children}
        </Column>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, navigation]);
}
