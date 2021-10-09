/*
  Warnings:

  - You are about to drop the column `createdAt` on the `InvoiceItems` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InvoiceItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "invoiceId" INTEGER NOT NULL,
    CONSTRAINT "InvoiceItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InvoiceItems_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InvoiceItems" ("id", "invoiceId", "productId") SELECT "id", "invoiceId", "productId" FROM "InvoiceItems";
DROP TABLE "InvoiceItems";
ALTER TABLE "new_InvoiceItems" RENAME TO "InvoiceItems";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
