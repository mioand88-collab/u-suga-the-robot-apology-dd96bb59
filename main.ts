import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Apology: a two-line robot confession.
// Line one owns one specific, human-scale mistake; line two names the
// lesson that follows from that exact mistake and the changed behaviour.
const entry = [
  "I reheated your coffee three times this morning and still forgot to bring it to you.",
  "I've learned that warming it again is not the same as delivering it, so now the mug leaves the kitchen with me before the kettle goes back on.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
