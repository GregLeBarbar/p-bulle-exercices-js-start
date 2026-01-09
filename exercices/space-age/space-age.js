//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EARTH_YEAR_IN_SECONDS = 31557600;

export const age = (planet, seconds) => {
  let secondMultiplier;

  switch (planet.toLowerCase()) {
    case "mercury":
      secondMultiplier = 0.2408467;
      break;
    case "venus":
      secondMultiplier = 0.61519726;
      break;
    case "earth":
      secondMultiplier = 1;
      break;
    case "mars":
      secondMultiplier = 1.8808158;
      break;
    case "jupiter":
      secondMultiplier =11.862615;
      break;
    case "saturn":
      secondMultiplier = 29.447498;
      break;
    case "uranus":
      secondMultiplier = 84.016846;
      break;
    case "neptune":
      secondMultiplier = 164.79132;
      break;

    default:
      throw new Error("not a planet");
  }

  let planetAge =
    Math.round((seconds / (EARTH_YEAR_IN_SECONDS * secondMultiplier)) * 100) /
    100;

  return planetAge;
};
