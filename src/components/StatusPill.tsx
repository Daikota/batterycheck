import { StyleSheet, Text, View } from 'react-native';

import { useAppTheme } from '../theme/useAppTheme';

type StatusTone = 'neutral' | 'success' | 'warning';

type StatusPillProps = {
  label: string;
  tone?: StatusTone;
};

export function StatusPill({ label, tone = 'neutral' }: StatusPillProps) {
  const theme = useAppTheme();
  const toneColor =
    tone === 'success'
      ? theme.colors.success
      : tone === 'warning'
        ? theme.colors.warning
        : theme.colors.textMuted;

  return (
    <View
      style={[
        styles.pill,
        {
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.surfaceStrong,
          borderRadius: theme.radius.pill,
        },
      ]}
    >
      <View style={[styles.dot, { backgroundColor: toneColor }]} />
      <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: 8,
    minHeight: 36,
    paddingHorizontal: 12,
  },
  dot: {
    borderRadius: 5,
    height: 10,
    width: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
  },
});
