/*
  Warnings:

  - The primary key for the `Conta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Conta` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Conta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Conta" ("email", "id", "nome", "senha") SELECT "email", "id", "nome", "senha" FROM "Conta";
DROP TABLE "Conta";
ALTER TABLE "new_Conta" RENAME TO "Conta";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
