import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { useAppTheme } from '../theme/useAppTheme';

type CardProps = PropsWithChildren<{
  quiet?: boolean;
}>;

export function Card({ children, quiet = false }: CardProps) {
  const theme = useAppTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: quiet ? theme.colors.surfaceMuted : theme.colors.surface,
          borderColor: theme.colors.border,
          borderRadius: theme.radius.lg,
          shadowColor: theme.colors.shadow,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 18,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 18,
    elevation: 4,
  },
});
