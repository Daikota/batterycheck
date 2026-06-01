import { Alert, StyleSheet, Text, View } from 'react-native';

import { ActionButton } from '../components/ActionButton';
import { Card } from '../components/Card';
import { Screen } from '../components/Screen';
import { StatusPill } from '../components/StatusPill';
import { useBatteryStatus } from '../features/battery/batteryStatus';
import { useAppTheme } from '../theme/useAppTheme';

function BatteryCard() {
  const theme = useAppTheme();
  const batteryStatus = useBatteryStatus();

  const percentage =
    batteryStatus.kind === 'ready' ? `${Math.round(batteryStatus.percentage * 100)}%` : '--';
  const chargingText =
    batteryStatus.kind === 'ready'
      ? batteryStatus.isCharging
        ? 'Laedt gerade'
        : 'Laedt nicht'
      : batteryStatus.detail;

  return (
    <Card>
      <View style={styles.cardHeader}>
        <Text style={[styles.cardLabel, { color: theme.colors.textMuted }]}>Aktueller Akku</Text>
        <StatusPill
          label={batteryStatus.kind === 'ready' ? 'Live' : 'Platzhalter'}
          tone={batteryStatus.kind === 'ready' ? 'success' : 'neutral'}
        />
      </View>
      <Text style={[styles.batteryValue, { color: theme.colors.text }]}>{percentage}</Text>
      <Text style={[styles.bodyText, { color: theme.colors.textMuted }]}>{chargingText}</Text>
    </Card>
  );
}

function RuleCard() {
  const theme = useAppTheme();

  return (
    <Card quiet>
      <View style={styles.cardHeader}>
        <Text style={[styles.cardLabel, { color: theme.colors.textMuted }]}>Regel</Text>
        <StatusPill label="Inaktiv" tone="warning" />
      </View>
      <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
        Noch keine Regel eingerichtet
      </Text>
      <Text style={[styles.bodyText, { color: theme.colors.textMuted }]}>
        Platzhalter fuer Version 0.1.0
      </Text>
    </Card>
  );
}

export function HomeScreen() {
  const theme = useAppTheme();

  function showPlaceholderAlert(action: string) {
    Alert.alert(action, 'Dieser Schritt ist ein Platzhalter fuer Version 0.1.0.');
  }

  return (
    <Screen
      footer={
        <>
          <ActionButton
            label="Regel einstellen"
            onPress={() => showPlaceholderAlert('Regel einstellen')}
          />
          <ActionButton
            label="Test-Benachrichtigung"
            onPress={() => showPlaceholderAlert('Test-Benachrichtigung')}
            variant="secondary"
            accessibilityHint="Loest noch keine echte Benachrichtigung aus."
          />
        </>
      }
    >
      <View style={styles.header}>
        <Text style={[styles.eyebrow, { color: theme.colors.textMuted }]}>Android zuerst</Text>
        <Text style={[styles.title, { color: theme.colors.text }]}>Akku-Lade-Erinnerung</Text>
      </View>
      <View style={styles.stack}>
        <BatteryCard />
        <RuleCard />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 8,
    marginBottom: 22,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 40,
  },
  stack: {
    gap: 14,
  },
  cardHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '700',
  },
  batteryValue: {
    fontSize: 56,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 64,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 28,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 21,
  },
});
