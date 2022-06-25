import fs from "fs"
import {join} from "path"

const readFile = (path: string): string =>
  fs.readFileSync(join(process.cwd(), path), "utf8")

export {readFile}
