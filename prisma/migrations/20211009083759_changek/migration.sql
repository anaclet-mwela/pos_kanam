/*
  Warnings:

  - Added the required column `stock` to the `InvoiceItems` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InvoiceItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceId" INTEGER NOT NULL,
    "name" TEXT,
    "price" REAL NOT NULL,
    "barcode" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    CONSTRAINT "InvoiceItems_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InvoiceItems" ("amount", "barcode", "id", "invoiceId", "name", "price") SELECT "amount", "barcode", "id", "invoiceId", "name", "price" FROM "InvoiceItems";
DROP TABLE "InvoiceItems";
ALTER TABLE "new_InvoiceItems" RENAME TO "InvoiceItems";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
