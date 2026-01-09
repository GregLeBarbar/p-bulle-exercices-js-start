//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { COLORS } from '../resistor-color/resistor-color'

export const decodedValue = (colors) => {
  return COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1]);
};
