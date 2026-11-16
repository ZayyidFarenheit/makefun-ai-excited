// Entry program for the "Make the AI judge excited" bounty.
// The artwork is a single finished image (entry.png) that ships with this
// repo. This program only places that image where the grader expects it:
// <output dir>/entry.png. It performs no network access and no rendering;
// the image itself is the entry.
import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("./entry.png", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, `${outDir}/entry.png`);
