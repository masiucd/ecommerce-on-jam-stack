// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next"

import {WebApi} from "~types/types"

type Data = Array<WebApi>

const webApis = [
  {name: "copy"},
  {name: "geoloaction"},
  {name: "file-system"},
  {name: "page-visibility"},
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  return res.status(200).json(webApis)
}
