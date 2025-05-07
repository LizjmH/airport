/*
  Warnings:

  - You are about to drop the column `code` on the `Crew` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Crew_code_key";

-- AlterTable
ALTER TABLE "Crew" DROP COLUMN "code";
