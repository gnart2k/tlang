import { QuizSet } from ".prisma/client";
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
  if (req.method === "POST") {
    const { title, authorEmail, subjectID } = req.body;
    const newQuizSet = await prisma.quizSet.create({
      data: {
        title: title,
        authorEmail: authorEmail,
        subjectID: subjectID,
      },
    });
  }
  const data = await prisma.quizSet.findMany({
    take: 10,
  });
  res.status(200).json(data);
}
