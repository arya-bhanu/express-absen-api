/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "StudentClass" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "StudentClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assistant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Assistant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentClass_email_key" ON "StudentClass"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StudentClass_nim_key" ON "StudentClass"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "Assistant_email_key" ON "Assistant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Assistant_nim_key" ON "Assistant"("nim");
