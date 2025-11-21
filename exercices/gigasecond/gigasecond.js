//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let gigaSeconds = date.getUTCSeconds() + 1e9;
  let gigaDate = new Date();

  gigaDate.setSeconds(gigaSeconds);

  return gigaDate.toISOString();
};
