import { parentPort, workerData } from "node:worker_threads";

const frequencies = {};

for (const char of workerData.toLowerCase()) {
  if (/\p{L}/u.test(char)) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
}

parentPort.postMessage(frequencies);