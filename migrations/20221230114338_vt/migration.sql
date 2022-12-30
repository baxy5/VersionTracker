-- CreateTable
CREATE TABLE "technology" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "published" TEXT,

    CONSTRAINT "technology_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "technology_name_key" ON "technology"("name");
