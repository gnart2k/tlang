/*
  Warnings:

  - You are about to drop the `quizSet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "quiz" DROP CONSTRAINT "quiz_subjectID_fkey";

-- DropTable
DROP TABLE "quizSet";

-- CreateTable
CREATE TABLE "QuizSet" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "authorID" TEXT NOT NULL,

    CONSTRAINT "QuizSet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuizSet" ADD CONSTRAINT "QuizSet_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz" ADD CONSTRAINT "quiz_subjectID_fkey" FOREIGN KEY ("subjectID") REFERENCES "QuizSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
