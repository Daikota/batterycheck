import { Pressable, StyleSheet, Text } from 'react-native';

import { useAppTheme } from '../theme/useAppTheme';

type ButtonVariant = 'primary' | 'secondary';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  accessibilityHint?: string;
};

export function ActionButton({
  label,
  onPress,
  variant = 'primary',
  accessibilityHint,
}: ActionButtonProps) {
  const theme = useAppTheme();
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          minHeight: 52,
          borderRadius: theme.radius.pill,
          backgroundColor: isPrimary
            ? pressed
              ? theme.colors.accentPressed
              : theme.colors.accent
            : theme.colors.surfaceStrong,
          borderColor: isPrimary ? theme.colors.accent : theme.colors.border,
          opacity: pressed ? 0.88 : 1,
        },
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: isPrimary ? theme.colors.textOnAccent : theme.colors.text,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
});
