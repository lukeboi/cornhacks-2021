# Migration `20210130222715-migration`

This migration has been generated by Taylor at 1/30/2021, 4:27:15 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210130222342-migration..20210130222715-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -23,11 +23,11 @@
   name      String
 //  projects  Project[]
 }
-//model Project {
-//  id        Int      @id @default(autoincrement())
-//  name      String
-//  owner     User     @relation(fields: [ownerId], references: [id])
-//  ownerId   Int
+model Project {
+  id        Int      @id @default(autoincrement())
+  name      String
+  owner     User     @relation(fields: [ownerId], references: [id])
+  ownerId   Int
 //  posts     Post[]
-//}
+}
```

