import fs from "fs"
import {join} from "path"

const readCardsFromFile = (): string =>
  fs.readFileSync(join(process.cwd(), "data/mocked-cards.json"), "utf8")

const getMockedCards = (from = 0, to = 6): Array<Card> => {
  const mocked = readCardsFromFile()
  const parsedData = JSON.parse(mocked) as Array<Card>
  return parsedData.slice(from, to)
  // cards = parsedData.slice(0, 6)
}

export {getMockedCards}
