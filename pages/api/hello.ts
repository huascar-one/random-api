// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  estado: number;
};

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ estado: random(0, 255) });
}
