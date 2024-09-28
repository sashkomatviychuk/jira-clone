import 'styled-components';

declare type Optional<T> = T | undefined;

declare type Nullable<T> = T | null;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        dark: string;
        medium: string;
        light: string;
        aqua: string;
      };
      success: {
        main: string;
        light: string;
      };
      danger: {
        main: string;
      };
      warning: {
        main: string;
      };
      secondary: {
        main: string;
      };
      text: {
        main: string;
        dark: string;
        medium: string;
        light: string;
      };
      gray: Record<number, string>;
      white: string;
    };
  }
}
