//
// This is only a SKELETON file for the 'Parallel Letter Frequency' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

export const parallelLetterFrequency = async (texts) => {
  const ParallelLetters = {};

  for (let i = 0; i < texts.length; i++) {
    const worker = new Worker(fileURLToPath(import.meta.url));

    worker.postMessage({
      ParallelLetters: ParallelLetters,
      Letter: texts[i].toLowerCase(),
    });
  }

  return ParallelLetters;
};
