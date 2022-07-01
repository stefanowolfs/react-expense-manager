export type ColorType =
  | "white"
  | "ice"
  | "grayOne"
  | "grayTwo"
  | "black"
  | "red"
  | "blue"
  | "green";

const Colors = {
  white: "#FFFFFF",
  ice: "#F9F9F9",
  grayOne: "#767680",
  grayTwo: "#565657",
  black: "#222222",
  red: "#BE1520",
  blue: "#007AFF",
  green: "#19A600",
};

export const getColorByName = (colorName: ColorType): string => {
  return Colors[colorName] || "white";
};

export default Colors;
