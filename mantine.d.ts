import { Tuple, DefaultMantineColor } from '@mantine/core';

type ExtendedCustomColors = 
| 'ocean-blue' 
| 'bright-pink'
| 'primary'
| 'secondary'
| 'primaryContainer'
| 'secondaryContainer'
| DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}