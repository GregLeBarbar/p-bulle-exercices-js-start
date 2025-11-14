//
// Implémentation de la fonction de fréquence de lettres en parallèle
//

/**
 * Compte la fréquence de chaque lettre dans un texte
 * @param {string} text - Le texte à analyser
 * @returns {Object} - Un objet avec les lettres comme clés et leurs fréquences comme valeurs
 */
const countLetters = (text) => {
  const frequency = {};

  // Convertir en minuscules et parcourir chaque caractère
  for (const char of text.toLowerCase()) {
    // Ne garder que les lettres (ignorer chiffres, ponctuation, espaces)
    if (char.match(/\p{L}/u)) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  return frequency;
};

/**
 * Fusionne plusieurs objets de fréquence en un seul
 * @param {Array<Object>} frequencies - Tableau d'objets de fréquence
 * @returns {Object} - Un objet fusionné avec toutes les fréquences combinées
 */
const mergeFrequencies = (frequencies) => {
  const result = {};

  for (const freq of frequencies) {
    for (const [letter, count] of Object.entries(freq)) {
      result[letter] = (result[letter] || 0) + count;
    }
  }

  return result;
};

/**
 * Calcule la fréquence des lettres dans plusieurs textes en parallèle
 * @param {Array<string>} texts - Tableau de textes à analyser
 * @returns {Promise<Object>} - Promise qui se résout avec un objet de fréquences
 */
export const parallelLetterFrequency = async (texts) => {
  // Cas du tableau vide
  if (texts.length === 0) {
    return {};
  }

  // Créer une promise pour chaque texte qui compte ses lettres
  const promises = texts.map((text) => {
    return Promise.resolve(countLetters(text));
  });

  // Attendre que tous les comptages soient terminés
  const frequencies = await Promise.all(promises);

  // Fusionner tous les résultats
  return mergeFrequencies(frequencies);
};
