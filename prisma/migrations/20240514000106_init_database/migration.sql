/*
  Warnings:

  - You are about to drop the column `descountPorcentage` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `descountPorcentage`,
    ADD COLUMN `discountPercentage` INTEGER NOT NULL DEFAULT 0;
