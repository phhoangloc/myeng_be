-- CreateTable
CREATE TABLE `Word` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `archive` VARCHAR(191) NOT NULL DEFAULT 'word',
    `name` VARCHAR(191) NOT NULL,
    `mean` VARCHAR(191) NOT NULL,
    `useto` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Word_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Path` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `archive` VARCHAR(191) NOT NULL DEFAULT 'pathone',
    `question` TEXT NOT NULL,
    `choose` TEXT NOT NULL,
    `answer` ENUM('A', 'B', 'C', 'D') NOT NULL,
    `questionTran` TEXT NOT NULL,
    `answerTran` TEXT NOT NULL,
    `script` TEXT NULL,
    `audio` VARCHAR(191) NULL,
    `explain` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
