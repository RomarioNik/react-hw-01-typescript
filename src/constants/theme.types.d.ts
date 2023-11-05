import "styled-components";

import { GlobalStyleTypes } from "./theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends GlobalStyleTypes {}
}
