/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#6C5DD3";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    primary: "#6C5DD3",
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#9D9DAA",
    tabIconDefault: "#BBBBC4",
    tabIconSelected: tintColorLight,
    bgGray: "#FAFAFB",
    borderColor: "rgba(27, 29, 33, 0.1)",
    shadow: "#000",
  },
  dark: {
    primary: "#6C5DD3",
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9D9DAA",
    tabIconDefault: "#BBBBC4",
    tabIconSelected: tintColorDark,
    bgGray: "#313131",
    borderColor: "#5c5c5c",
    shadow: "#fff",
  },
};
