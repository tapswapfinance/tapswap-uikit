import { Colors } from "./types";

export const baseColors = {
  failure: "#e02f58",
  primary: "#D1004D",
  primaryBright: "#dd831c",
  primaryDark: "#c25e00",
  secondary: "#d6931a", //
  success: "#dace31",
  warning: "#e68327",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F5F0F1",
  secondary: "#D1004D", //
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#452A7A", //
  textDisabled: "#BDC2C4",
  textSubtle: "#D1004D",
  borderColor: "#E9EAEB",
  card: "#F5F0F1",
  nav: "#D1004D", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F5F0F1 0%, #F5F0F1 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#2A7EFF",
  secondary: "#ffffff", //  
  background: "#0F0F30", //
  backgroundDisabled: "#424037", //
  contrast: "#FFFFFF",
  invertedContrast: "#262513",
  input: "#483F5A",
  inputSecondary: "#8d8857",
  primaryDark: "#8f8104",
  tertiary: "#28444A", //
  text: "#fcfae2", //
  textDisabled: "#717161", //
  textSubtle: "#ffffff", //
  borderColor: "#61634b",
  card: "#191E45", //
  nav: "#191E45", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #191E45 0%, #191E45 100%)", //
  },
};
