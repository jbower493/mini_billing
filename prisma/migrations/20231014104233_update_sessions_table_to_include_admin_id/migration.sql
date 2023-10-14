/*
  Warnings:

  - You are about to drop the column `data` on the `session` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `session` DROP COLUMN `data`,
    ADD COLUMN `admin_id` INTEGER NULL;
