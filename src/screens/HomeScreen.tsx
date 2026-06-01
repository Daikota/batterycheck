import { Alert, StyleSheet, Text, View } from 'react-native';

import { ActionButton } from '../components/ActionButton';
import { Card } from '../components/Card';
import { Screen } from '../components/Screen';
import { StatusPill } from '../components/StatusPill';
import { useBatteryInfo } from '../features/battery/useBatteryInfo';
import { useAppTheme } from '../theme/useAppTheme';

function BatteryCard() {
  const theme = useAppTheme();
  const batteryInfo = useBatteryInfo();

  const percentage =
    batteryInfo.batteryLevelPercent === null ? '--' : `${batteryInfo.batteryLevelPercent} %`;
  const chargingText =
    batteryInfo.isCharging === null
      ? 'Unbekannt'
      : batteryInfo.isCharging
        ? 'Wird geladen'
        : 'Lädt nicht';
  const statusText = batteryInfo.isLoading ? 'Lädt' : batteryInfo.errorMessage ? 'Fehler' : 'Live';
  const statusTone = batteryInfo.errorMessage ? 'warning' : 'success';

  return (
    <Card>
      <View style={styles.cardHeader}>
        <Text style={[styles.cardLabel, { color: theme.colors.textMuted }]}>Aktueller Akku</Text>
        <StatusPill label={statusText} tone={batteryInfo.isLoading ? 'neutral' : statusTone} />
      </View>
      <Text style={[styles.batteryValue, { color: theme.colors.text }]}>{percentage}</Text>
      <View style={styles.batteryDetails}>
        <Text style={[styles.bodyText, { color: theme.colors.textMuted }]}>
          {batteryInfo.isLoading ? 'Akkudaten werden geladen ...' : chargingText}
        </Text>
        {batteryInfo.errorMessage ? (
          <Text style={[styles.bodyText, { color: theme.colors.danger }]}>
            {batteryInfo.errorMessage}
          </Text>
        ) : null}
      </View>
      <View style={styles.cardAction}>
        <ActionButton
          label={batteryInfo.isLoading ? 'Aktualisiert ...' : 'Aktualisieren'}
          onPress={() => {
            void batteryInfo.refreshBatteryInfo();
          }}
          variant="secondary"
          size="compact"
          disabled={batteryInfo.isLoading}
        />
      </View>
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
        Platzhalter für Version 0.2.0
      </Text>
    </Card>
  );
}

export function HomeScreen() {
  const theme = useAppTheme();

  function showPlaceholderAlert(action: string) {
    Alert.alert(action, 'Dieser Schritt ist ein Platzhalter für Version 0.2.0.');
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
            accessibilityHint="Löst noch keine echte Benachrichtigung aus."
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
  batteryDetails: {
    gap: 6,
  },
  cardAction: {
    alignItems: 'flex-start',
    marginTop: 16,
  },
});
