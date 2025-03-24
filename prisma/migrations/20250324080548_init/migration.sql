/*
  Warnings:

  - You are about to drop the column `useto` on the `Word` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Word` DROP COLUMN `useto`,
    ADD COLUMN `book` VARCHAR(191) NULL,
    ADD COLUMN `example` VARCHAR(191) NULL;
