import { prisma } from "./../../../lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  quizSetID: string;
  question: string;
  correctAnswer: string;
};

type Quiz = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { authorEmail, subjectID, title } = req.body;
  if (req.method === "POST") {
    authorEmail: authorEmail;
  }
  //add question to quizSet
  const { id } = req.query;
  const newSubject = await prisma.quizSet.findMany({
    where: {
      subjectID: id as string,
    },
  });
  res.status(200).json(req.body);
}
