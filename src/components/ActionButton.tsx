import { Pressable, StyleSheet, Text } from 'react-native';

import { useAppTheme } from '../theme/useAppTheme';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'regular' | 'compact';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  accessibilityHint?: string;
};

export function ActionButton({
  label,
  onPress,
  variant = 'primary',
  size = 'regular',
  disabled = false,
  accessibilityHint,
}: ActionButtonProps) {
  const theme = useAppTheme();
  const isPrimary = variant === 'primary';
  const isCompact = size === 'compact';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityHint={accessibilityHint}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          minHeight: isCompact ? 44 : 52,
          borderRadius: theme.radius.pill,
          backgroundColor: isPrimary
            ? pressed
              ? theme.colors.accentPressed
              : theme.colors.accent
            : theme.colors.surfaceStrong,
          borderColor: isPrimary ? theme.colors.accent : theme.colors.border,
          opacity: disabled ? 0.56 : pressed ? 0.88 : 1,
          paddingHorizontal: isCompact ? 14 : 18,
          paddingVertical: isCompact ? 10 : 14,
        },
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: isPrimary ? theme.colors.textOnAccent : theme.colors.text,
            fontSize: isCompact ? 14 : 16,
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
  },
  label: {
    fontWeight: '700',
  },
});
