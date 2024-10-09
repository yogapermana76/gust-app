import { ComponentType, useMemo } from 'react';
import { IconProps } from './Icon.types';
import { IconImage } from './Image';
import { IconLayout } from './Layout';
import { IconSvg } from './Svg';
import { useTheme } from '@/theme/hooks';

/**
 * For your icon displaying needs.
 *
 * - [Documentation](https://docs.expo.dev/guides/icons/)
 * - [IcoMoon](https://icomoon.io/)
 */
export function Icon(props: IconProps) {
  const theme = useTheme();
  const {
    name,
    preset = 'svg',
    size = 24,
    color: colorOverride,
    children,
    ...rest
  } = props;

  const IconRaw = useMemo(() => {
    return IconPresets[preset];
  }, [preset]);

  const color = colorOverride
    ? colorOverride
    : preset === 'svg'
    ? theme.colors.palette.primary.dark
    : undefined;

  return (
    <IconLayout {...rest}>
      <IconRaw name={name} size={size} color={color} />
      {children}
    </IconLayout>
  );
}

const IconPresets: Record<'svg' | 'image', ComponentType<any>> = {
  svg: IconSvg,
  image: IconImage,
};
