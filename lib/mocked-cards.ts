import {readFile} from "./read-file"

const getMockedCards = (from = 0, to = 6): Array<Card> => {
  const mocked = readFile("data/mocked-cards.json")
  const parsedData = JSON.parse(mocked) as Array<Card>
  return parsedData.slice(from, to)
}

export {getMockedCards}
