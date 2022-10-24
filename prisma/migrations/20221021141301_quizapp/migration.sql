-- CreateTable
CREATE TABLE "quizSet" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "quizSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "incorrectAnswer" TEXT[],
    "subjectID" TEXT NOT NULL,

    CONSTRAINT "quiz_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "quiz" ADD CONSTRAINT "quiz_subjectID_fkey" FOREIGN KEY ("subjectID") REFERENCES "quizSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
