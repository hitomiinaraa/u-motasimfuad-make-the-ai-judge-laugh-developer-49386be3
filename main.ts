// One excuse, one quiet database: nothing here ever argues back.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I tested it locally, where the database is small, polite, and afraid of me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
