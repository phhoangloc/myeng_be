/*
  Warnings:

  - You are about to drop the column `coverId` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `infor` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `video` on the `Blog` table. All the data in the column will be lost.
  - Made the column `content` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Blog` DROP FOREIGN KEY `Blog_coverId_fkey`;

-- DropIndex
DROP INDEX `Blog_coverId_fkey` ON `Blog`;

-- AlterTable
ALTER TABLE `Blog` DROP COLUMN `coverId`,
    DROP COLUMN `infor`,
    DROP COLUMN `name`,
    DROP COLUMN `video`,
    MODIFY `content` TEXT NOT NULL;
