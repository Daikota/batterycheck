export type ThemeMode = 'light' | 'dark';

export type AppTheme = {
  mode: ThemeMode;
  isDark: boolean;
  colors: {
    background: string;
    surface: string;
    surfaceMuted: string;
    surfaceStrong: string;
    accent: string;
    accentPressed: string;
    text: string;
    textMuted: string;
    textOnAccent: string;
    border: string;
    success: string;
    warning: string;
    danger: string;
    shadow: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    pill: number;
  };
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

const radius = {
  sm: 8,
  md: 14,
  lg: 22,
  pill: 999,
};

export const themes: Record<ThemeMode, AppTheme> = {
  light: {
    mode: 'light',
    isDark: false,
    colors: {
      background: '#FEFDFF',
      surface: '#8EB1C7',
      surfaceMuted: '#EAF1F5',
      surfaceStrong: '#FFFFFF',
      accent: '#EE8434',
      accentPressed: '#D96F22',
      text: '#202331',
      textMuted: '#59616F',
      textOnAccent: '#20150E',
      border: 'rgba(32, 35, 49, 0.12)',
      success: '#2D7D5F',
      warning: '#9A661B',
      danger: '#A73E3E',
      shadow: 'rgba(32, 35, 49, 0.16)',
    },
    spacing,
    radius,
  },
  dark: {
    mode: 'dark',
    isDark: true,
    colors: {
      background: '#2C2B3C',
      surface: '#403F4C',
      surfaceMuted: '#363545',
      surfaceStrong: '#4B4A58',
      accent: '#EE8434',
      accentPressed: '#F09A59',
      text: '#F4F1F0',
      textMuted: '#C9C4C8',
      textOnAccent: '#20150E',
      border: 'rgba(244, 241, 240, 0.12)',
      success: '#7FC8A9',
      warning: '#E2B35F',
      danger: '#EF8D8D',
      shadow: 'rgba(0, 0, 0, 0.28)',
    },
    spacing,
    radius,
  },
};
