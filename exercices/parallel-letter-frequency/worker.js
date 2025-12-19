import { parallelLetterFrequency } from "./parallel-letter-frequency";

self.addEventListener("message", function (e) {
  const [ParallelLetters, Letter] = [e.data[0], e.data[1]];

  if (
    ParallelLetters != undefined &&
    ParallelLetters != null &&
    Letter != undefined &&
    Letter != null
  ) {
    if (
      ParallelLetters[Letter] != undefined &&
      ParallelLetters[Letter] != null
    ) {
      ParallelLetters[Letter]++;
    } else {
      ParallelLetters[Letter] = 1;
    }
  }
}, false);
