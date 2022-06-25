import {readFile} from "./read-file"

const getMockedTypes = (): Array<string> => {
  const mocked = readFile("data/mocked-types.json")
  const parsedData = JSON.parse(mocked) as Array<string>
  return parsedData
}

export {getMockedTypes}
