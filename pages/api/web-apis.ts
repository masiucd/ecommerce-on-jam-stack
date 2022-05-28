// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next"

type Data = Array<WebApi>

const webApis = [
  {name: "copy"},
  {name: "geoloaction"},
  {name: "battery"},
  {name: "file-system"},
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  return res.status(200).json(webApis)
}
