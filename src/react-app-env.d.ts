/// <reference types="react-scripts" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module "react-country-flag" {
    export interface ReactCountryFlagProps {
      countryCode: string;
      className?: string;
    }
    export default class ReactCountryFlag extends React.PureComponent<
      ReactCountryFlagProps,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    > {}
  }
  