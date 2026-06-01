export type BatteryStatus =
  | {
      kind: 'unavailable';
      title: string;
      detail: string;
    }
  | {
      kind: 'loading';
      title: string;
      detail: string;
    }
  | {
      kind: 'ready';
      percentage: number;
      isCharging: boolean;
    }
  | {
      kind: 'error';
      title: string;
      detail: string;
    };

export function useBatteryStatus(): BatteryStatus {
  return {
    kind: 'unavailable',
    title: 'Akkustand nicht verfügbar',
    detail: 'expo-battery ist noch nicht installiert.',
  };
}
