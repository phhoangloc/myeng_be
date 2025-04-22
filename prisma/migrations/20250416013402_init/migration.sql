/*
  Warnings:

  - You are about to drop the `Pic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Pic` DROP FOREIGN KEY `Pic_hostId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_avataId_fkey`;

-- DropIndex
DROP INDEX `User_avataId_fkey` ON `User`;

-- DropTable
DROP TABLE `Pic`;

-- CreateTable
CREATE TABLE `File` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `archive` VARCHAR(191) NOT NULL DEFAULT 'pic',
    `hostId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_avataId_fkey` FOREIGN KEY (`avataId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `File` ADD CONSTRAINT `File_hostId_fkey` FOREIGN KEY (`hostId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
