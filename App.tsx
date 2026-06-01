import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeScreen } from './src/screens/HomeScreen';
import { useAppTheme } from './src/theme/useAppTheme';

export default function App() {
  const theme = useAppTheme();

  return (
    <SafeAreaProvider>
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <HomeScreen />
    </SafeAreaProvider>
  );
}
