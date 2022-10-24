import { prisma } from "./../../../lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const newSubject = await prisma.quizSet.findMany({
    where: {
      subjectID: id as string,
    },
  });
  res.status(200).json(newSubject);
}
