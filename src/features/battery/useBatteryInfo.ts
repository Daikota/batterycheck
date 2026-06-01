import { useCallback, useEffect, useState } from 'react';
import * as Battery from 'expo-battery';

export type BatteryInfo = {
  batteryLevelPercent: number | null;
  isCharging: boolean | null;
  isLoading: boolean;
  errorMessage: string | null;
  refreshBatteryInfo: () => Promise<void>;
};

function getBatteryLevelPercent(batteryLevel: number): number | null {
  if (batteryLevel < 0 || batteryLevel > 1) {
    return null;
  }

  return Math.round(batteryLevel * 100);
}

function getChargingState(batteryState: Battery.BatteryState): boolean | null {
  switch (batteryState) {
    case Battery.BatteryState.CHARGING:
    case Battery.BatteryState.FULL:
      return true;
    case Battery.BatteryState.UNPLUGGED:
    case Battery.BatteryState.NOT_CHARGING:
      return false;
    case Battery.BatteryState.UNKNOWN:
    default:
      return null;
  }
}

export function useBatteryInfo(): BatteryInfo {
  const [batteryLevelPercent, setBatteryLevelPercent] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const refreshBatteryInfo = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const isAvailable = await Battery.isAvailableAsync();

      if (!isAvailable) {
        setBatteryLevelPercent(null);
        setIsCharging(null);
        setErrorMessage('Akkudaten sind auf diesem Gerät nicht verfügbar.');
        return;
      }

      const powerState = await Battery.getPowerStateAsync();
      setBatteryLevelPercent(getBatteryLevelPercent(powerState.batteryLevel));
      setIsCharging(getChargingState(powerState.batteryState));
    } catch {
      setBatteryLevelPercent(null);
      setIsCharging(null);
      setErrorMessage('Batterieinformationen konnten nicht gelesen werden.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refreshBatteryInfo();
  }, [refreshBatteryInfo]);

  return {
    batteryLevelPercent,
    isCharging,
    isLoading,
    errorMessage,
    refreshBatteryInfo,
  };
}
