import { Subject } from "./../../node_modules/.prisma/client/index.d";
import { prisma } from "../../lib/db";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.subject.findMany({
    take: 10,
  });
  res.status(200).json(data);
}
