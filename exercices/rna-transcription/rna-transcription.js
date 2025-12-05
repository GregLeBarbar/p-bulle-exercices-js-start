//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) => {
  let RNA = "";
  for (const letter of DNA) {
    switch (letter) {
      case 'G':
        RNA += 'C';
        break;
      case 'C':
        RNA += 'G';
        break;
      case 'T':
        RNA += 'A';
        break;
      case 'A':
        RNA += 'U';
        break;
    }
  };

  return RNA;
};
