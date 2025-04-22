/*
  Warnings:

  - You are about to drop the column `audio` on the `Path` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Path` DROP COLUMN `audio`,
    ADD COLUMN `audioId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Path` ADD CONSTRAINT `Path_audioId_fkey` FOREIGN KEY (`audioId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
