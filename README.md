# expo-menuview-rotation-repro

Minimal reproduction for iOS `MenuView` trigger sizing in `@expo/ui`:

- a full-width row wrapped in `MenuView` is measured with an unbounded width (the title does not wrap and the row renders wider than the screen), and
- the trigger keeps its first measured size after the device rotates, instead of reflowing to the new parent width.

The same rows rendered as plain React Native views are included as a reference and update correctly.

## Run

```bash
bun install
npx expo run:ios
```

`@expo/ui` is not available in Expo Go, so a development build is required.

## Reproduce

1. Open the app in portrait.
   - The "MenuView (affected)" rows render wider than the screen / clip their title.
   - The "Plain React Native (reference)" rows wrap and stay inside the screen.
2. Rotate the simulator/device to landscape and back to portrait.
   - The plain rows reflow at each rotation.
   - The `MenuView` rows keep the width/height measured before the rotation.

## Environment

- Expo SDK 58 (`expo@58.0.19`)
- `@expo/ui@58.0.23`
- `expo-modules-core@58.0.26`
- `react-native@0.88.0`
- iOS simulator, New Architecture enabled by default
