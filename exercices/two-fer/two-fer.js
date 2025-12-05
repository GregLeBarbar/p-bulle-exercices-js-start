//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  let newName

  if (name != null && name != undefined)
  {
    newName = name;
  }
  else {
    newName = "you";
  }

  return "One for " + newName + ", one for me.";
};
