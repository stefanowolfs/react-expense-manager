// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      gradientBackground: {
        color1: string;
        color2: string;
      };
    };
  }
}
