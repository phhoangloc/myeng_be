/*
  Warnings:

  - You are about to drop the column `answer` on the `Path` table. All the data in the column will be lost.
  - You are about to drop the column `answerTran` on the `Path` table. All the data in the column will be lost.
  - You are about to drop the column `questionTran` on the `Path` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Path` DROP COLUMN `answer`,
    DROP COLUMN `answerTran`,
    DROP COLUMN `questionTran`;
