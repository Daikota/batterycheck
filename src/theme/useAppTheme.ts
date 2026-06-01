import { useColorScheme } from 'react-native';

import { AppTheme, themes } from './theme';

export function useAppTheme(): AppTheme {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? themes.dark : themes.light;
}
