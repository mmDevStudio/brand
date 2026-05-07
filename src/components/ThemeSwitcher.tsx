"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import Button from "./Button";

const THEME_MODE_KEY = "theme-mode";
const THEME_MODES = ["light", "dark"] as const;

const THEME_ICONS = {
  dark: <MoonIcon />,
  light: <SunIcon />,
};

type ThemeMode = (typeof THEME_MODES)[number];

/** reads from window.localStorage */
const readMode = (window?: Window) => {
  const mode = window?.localStorage.getItem(THEME_MODE_KEY);

  return (mode || THEME_MODES[0]) as ThemeMode;
};

/** writes to window.localStorage and window.document */
const writeMode = (mode: ThemeMode, window?: Window) => {
  window?.localStorage.setItem(THEME_MODE_KEY, mode);

  window?.document.documentElement.classList.remove(...THEME_MODES);
  window?.document.documentElement.classList.add(mode);
};

type ContextProps = {
  themeMode: ThemeMode;
  cycleMode?: () => void;
};

const context = React.createContext<ContextProps>({
  themeMode: THEME_MODES[0],
});

type ThemeModeProvider = {
  children: React.ReactNode;
};

export function ThemeModeProvider({ children }: ThemeModeProvider) {
  const [themeMode, cycleMode] = React.useReducer(
    (currentThemeMode, forceThemeMode?: ThemeMode) => {
      let themeMode = forceThemeMode;
      const idx = THEME_MODES.indexOf(currentThemeMode);
      themeMode ||= THEME_MODES[(idx + 1) % THEME_MODES.length] as ThemeMode;

      writeMode(themeMode, window);
      return themeMode;
    },
    THEME_MODES[0] as ThemeMode,
  );

  React.useEffect(() => {
    const themeMode = readMode(window);
    cycleMode(themeMode);
  }, []);

  return (
    <context.Provider value={{ cycleMode, themeMode }}>
      {children}
    </context.Provider>
  );
}

type ThemeModeSwitcher = Omit<Parameters<typeof Button>[0], "onClick">;

export function ThemeModeSwitcher(props: ThemeModeSwitcher) {
  const { themeMode, cycleMode } = React.useContext(context);

  return (
    <Button
      mode="ghost"
      onClick={() => (cycleMode ? cycleMode() : undefined)}
      prefixIcon={THEME_ICONS[themeMode]}
      {...props}
    />
  );
}
