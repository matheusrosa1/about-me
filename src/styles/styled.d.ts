import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: string;
      background: string;
      /*       secondBackground: string,
      colorHeader: string;
      colorTextApresentation: string;
      hoverLinkHeader: string;
      optionSelectColor: string,
      scrollThumb: string,
      btnTopColor: string, */
    };
  }
}
