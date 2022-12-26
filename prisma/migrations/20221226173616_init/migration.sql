-- CreateTable
CREATE TABLE "List" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "insertedAt" DATETIME NOT NULL,
    "updatedAt" DATETIME,
    "listId" INTEGER,
    CONSTRAINT "Item_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
