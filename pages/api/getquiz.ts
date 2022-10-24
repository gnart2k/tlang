import { prisma } from "./../../lib/db";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.quizSet.findMany({
    take: 10,
  });
  res.status(200).json(data);
}
