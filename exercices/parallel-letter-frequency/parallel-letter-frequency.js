//
// This is only a SKELETON file for the 'Parallel Letter Frequency' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import { Worker } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const runWorker = (text) =>
  new Promise((resolve, reject) => {
    const worker = new Worker(join(__dirname, "worker.js"), {
      workerData: text,
    });

    worker.once("message", resolve);
    worker.once("error", reject);
  });

export const parallelLetterFrequency = async (texts) => {
  if (!texts || texts.length === 0) {
    return {};
  }

  const results = await Promise.all(texts.map(runWorker));

  const total = {};
  for (const freq of results) {
    for (const [letter, count] of Object.entries(freq)) {
      let previous = total[letter] || 0;

      total[letter] = previous + count;
    }
  }

  return total;
};
