-- CreateTable
CREATE TABLE `PathFive` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `archive` VARCHAR(191) NOT NULL DEFAULT 'pathfive',
    `question` TEXT NOT NULL,
    `choose` TEXT NOT NULL,
    `answer` TEXT NOT NULL,
    `questionTran` TEXT NOT NULL,
    `answerTran` TEXT NOT NULL,
    `explain` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
