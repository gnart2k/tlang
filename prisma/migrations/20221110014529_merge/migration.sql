/*
  Warnings:

  - You are about to drop the column `subjectID` on the `quiz` table. All the data in the column will be lost.
  - Added the required column `quizSetID` to the `quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "quiz" DROP CONSTRAINT "quiz_subjectID_fkey";

-- AlterTable
ALTER TABLE "quiz" DROP COLUMN "subjectID",
ADD COLUMN     "quizSetID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "quiz" ADD CONSTRAINT "quiz_quizSetID_fkey" FOREIGN KEY ("quizSetID") REFERENCES "QuizSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
