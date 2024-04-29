/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `admin` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "admin" ALTER COLUMN "fullname" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");
