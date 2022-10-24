import { Subject } from "./../../node_modules/.prisma/client/index.d";
import { prisma } from "./../../lib/db";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  if (req.method === "POST") {
    const { title, authorEmail } = req.body;
    const newSubject = await prisma.subject.create({
      data: {
        title: title,
      },
    });
  }
  res.status(200).json(req.body);
}
