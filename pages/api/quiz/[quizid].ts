import { prisma } from "./../../../lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  quizSetID: string;
  question: string;
  correctAnswer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { quizid } = req.query;
  //add question to quizSet
  const { question, correctAnswer } = req.body;
  const Quiz: Data = {
    quizSetID: quizid as string,
    question: question,
    correctAnswer: correctAnswer,
  };
  if (req.method === "POST") {
    const newQuiz = await prisma.quiz.create({
      data: Quiz,
    });
  }

  const quizList = await prisma.quiz.findMany({
    where: {
      quizSetID: quizid as string,
    },
  });

  res.status(200).json(quizList);
}
