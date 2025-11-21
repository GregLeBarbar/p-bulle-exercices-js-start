//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();

  if (message.endsWith("?"))
  {
    if (message === message.toUpperCase() && (/[a-zA-z]/g).test(message)) {
      return "Calm down, I know what I'm doing!";
    } else {
      return "Sure.";
    }
  } else if (message === message.toUpperCase() && (/[a-zA-z]/g).test(message)) {
    return "Whoa, chill out!";
  } else if (!(/[a-zA-z]/g).test(message) && !(/\d/).test(message)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
