// The Best Meal You Ever Had — one sentence, at most 200 characters.
// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters.
// The sentence below is the entry: a 2 a.m. tekwan in Palembang, fogged
// glasses, lime-sharp broth, and the measure every soup since is held to.
import * as fs from "node:fs";

const SENTENCE =
  "At a plastic table in Palembang at 2 a.m., I ate tekwan so hot it fogged my glasses, the fish broth sharp with lime, and I have measured every soup since against that one bowl.";

const OUT = "/output/entry.txt";

if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${SENTENCE.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(OUT, SENTENCE, "utf8");
console.log(`wrote ${SENTENCE.length} characters to ${OUT}`);
