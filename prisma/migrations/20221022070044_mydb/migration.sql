/*
  Warnings:

  - You are about to drop the column `authorID` on the `QuizSet` table. All the data in the column will be lost.
  - Added the required column `authorEmail` to the `QuizSet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "QuizSet" DROP CONSTRAINT "QuizSet_authorID_fkey";

-- AlterTable
ALTER TABLE "QuizSet" DROP COLUMN "authorID",
ADD COLUMN     "authorEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "QuizSet" ADD CONSTRAINT "QuizSet_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
