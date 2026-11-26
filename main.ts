// Round-5 entry for news-image-20261125 (Node 22, standard library only).
// The image this entry is judged on is the entry.png beside this file; the
// program copies it byte-for-byte to the output directory, so both grader
// runs write the same bytes. Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Write-back self-check: read the output back in binary and assert its
// bytes equal the source entry.png bytes; fail loudly if they differ.
const written = readFileSync(dest);
const expected = readFileSync(src);
if (!written.equals(expected)) {
  throw new Error(
    `entry.png copy mismatch: wrote ${written.length} bytes, expected ${expected.length} bytes from source`,
  );
}
// Gate guard: the judged file must stay inside the competition's 1 MiB limit.
if (statSync(dest).size > 1048576) {
  throw new Error(`entry.png over the 1 MiB limit: ${statSync(dest).size} bytes`);
}
