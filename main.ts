// The One-Line Exit — make.fun
// One line: the funniest single-line resignation letter.
// Entry: make-fun-one-line-exit-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I hereby resign, effective immediately: the printer jammed for the last time today, and frankly, so did I.";

if (line.length < 1 || line.length > 139) {
  throw new Error(`Line must be 1-139 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
