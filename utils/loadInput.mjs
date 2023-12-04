import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const loadInput = (day = 1, toArray = false, delimiter = "\n") => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const inputFilePath = path.resolve(
    __dirname,
    "..",
    `2022_12_${day}`,
    "input.txt"
  );
  const text = fs.readFileSync(inputFilePath).toString();
  if (toArray === false) {
    return text;
  } else {
      return text . split(delimiter);
  }
};

export default loadInput;