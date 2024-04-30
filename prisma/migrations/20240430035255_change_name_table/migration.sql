/*
  Warnings:

  - You are about to drop the `building-character` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `building-condition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `building-seria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `heating-system` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `object-category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `object-status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `object-type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `owner-cooperation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `owner-relation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reason-deleting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `relationship-type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `residence-type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `room-type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wall-material` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `water-supply` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `window-side` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "building-character" DROP CONSTRAINT "building-character_buildingConditionId_fkey";

-- DropForeignKey
ALTER TABLE "building-character" DROP CONSTRAINT "building-character_buildingSeriaId_fkey";

-- DropForeignKey
ALTER TABLE "building-character" DROP CONSTRAINT "building-character_heatingSystemId_fkey";

-- DropForeignKey
ALTER TABLE "building-character" DROP CONSTRAINT "building-character_overlapsId_fkey";

-- DropForeignKey
ALTER TABLE "building-character" DROP CONSTRAINT "building-character_parkingId_fkey";

-- DropForeignKey
ALTER TABLE "building-character" DROP CONSTRAINT "building-character_wallMaterialId_fkey";

-- DropForeignKey
ALTER TABLE "building-character" DROP CONSTRAINT "building-character_waterSupplyId_fkey";

-- DropForeignKey
ALTER TABLE "object" DROP CONSTRAINT "object_buildingCharacterId_fkey";

-- DropForeignKey
ALTER TABLE "object" DROP CONSTRAINT "object_objectCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "object" DROP CONSTRAINT "object_objectStatusId_fkey";

-- DropForeignKey
ALTER TABLE "object" DROP CONSTRAINT "object_objectTypeId_fkey";

-- DropForeignKey
ALTER TABLE "object" DROP CONSTRAINT "object_ownerRelationId_fkey";

-- DropForeignKey
ALTER TABLE "object" DROP CONSTRAINT "object_residenceTypeId_fkey";

-- DropForeignKey
ALTER TABLE "object" DROP CONSTRAINT "object_roomTypeId_fkey";

-- DropForeignKey
ALTER TABLE "object" DROP CONSTRAINT "object_windowSideId_fkey";

-- DropForeignKey
ALTER TABLE "owner-relation" DROP CONSTRAINT "owner-relation_ownerCooperationId_fkey";

-- DropForeignKey
ALTER TABLE "owner-relation" DROP CONSTRAINT "owner-relation_ownershipId_fkey";

-- DropForeignKey
ALTER TABLE "owner-relation" DROP CONSTRAINT "owner-relation_reasonDeletingId_fkey";

-- DropForeignKey
ALTER TABLE "owner-relation" DROP CONSTRAINT "owner-relation_relationshipTypeId_fkey";

-- DropForeignKey
ALTER TABLE "residence-type" DROP CONSTRAINT "residence-type_objectTypeId_fkey";

-- DropTable
DROP TABLE "building-character";

-- DropTable
DROP TABLE "building-condition";

-- DropTable
DROP TABLE "building-seria";

-- DropTable
DROP TABLE "heating-system";

-- DropTable
DROP TABLE "object-category";

-- DropTable
DROP TABLE "object-status";

-- DropTable
DROP TABLE "object-type";

-- DropTable
DROP TABLE "owner-cooperation";

-- DropTable
DROP TABLE "owner-relation";

-- DropTable
DROP TABLE "reason-deleting";

-- DropTable
DROP TABLE "relationship-type";

-- DropTable
DROP TABLE "residence-type";

-- DropTable
DROP TABLE "room-type";

-- DropTable
DROP TABLE "wall-material";

-- DropTable
DROP TABLE "water-supply";

-- DropTable
DROP TABLE "window-side";

-- CreateTable
CREATE TABLE "ownerRelation" (
    "id" SERIAL NOT NULL,
    "commission_amount" INTEGER NOT NULL,
    "commission_comment" TEXT NOT NULL,
    "deposit_amount" INTEGER NOT NULL,
    "deposit_paid" DECIMAL(65,30) NOT NULL,
    "owner_price_ideal" DECIMAL(65,30) NOT NULL,
    "owner_price_real" DECIMAL(65,30) NOT NULL,
    "owner_price_minimal" DECIMAL(65,30) NOT NULL,
    "ownershipId" INTEGER,
    "reasonDeletingId" INTEGER,
    "ownerCooperationId" INTEGER,
    "relationshipTypeId" INTEGER,

    CONSTRAINT "ownerRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buildingCharacter" (
    "id" SERIAL NOT NULL,
    "building_year" TEXT NOT NULL,
    "is_gas" BOOLEAN NOT NULL,
    "is_electric" BOOLEAN NOT NULL,
    "passenger_elevators_count" INTEGER NOT NULL,
    "freight_elevators_count" INTEGER NOT NULL,
    "is_building_security" BOOLEAN NOT NULL,
    "is_demolition_planned" BOOLEAN NOT NULL,
    "wallMaterialId" INTEGER,
    "overlapsId" INTEGER,
    "heatingSystemId" INTEGER,
    "buildingConditionId" INTEGER,
    "buildingSeriaId" INTEGER,
    "waterSupplyId" INTEGER,
    "parkingId" INTEGER,

    CONSTRAINT "buildingCharacter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objectType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "objectType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "residenceType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "objectTypeId" INTEGER,

    CONSTRAINT "residenceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objectCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "objectCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objectStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "objectStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "windowSide" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "windowSide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roomType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "roomType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reasonDeleting" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "reasonDeleting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ownerCooperation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ownerCooperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relationshipType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "relationshipType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallMaterial" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "wallMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "heatingSystem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "heatingSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buildingCondition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "buildingCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buildingSeria" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "buildingSeria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "waterSupply" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "waterSupply_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_ownerRelationId_fkey" FOREIGN KEY ("ownerRelationId") REFERENCES "ownerRelation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_buildingCharacterId_fkey" FOREIGN KEY ("buildingCharacterId") REFERENCES "buildingCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_objectTypeId_fkey" FOREIGN KEY ("objectTypeId") REFERENCES "objectType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_residenceTypeId_fkey" FOREIGN KEY ("residenceTypeId") REFERENCES "residenceType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_objectCategoryId_fkey" FOREIGN KEY ("objectCategoryId") REFERENCES "objectCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_objectStatusId_fkey" FOREIGN KEY ("objectStatusId") REFERENCES "objectStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_windowSideId_fkey" FOREIGN KEY ("windowSideId") REFERENCES "windowSide"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "roomType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ownerRelation" ADD CONSTRAINT "ownerRelation_ownershipId_fkey" FOREIGN KEY ("ownershipId") REFERENCES "ownership"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ownerRelation" ADD CONSTRAINT "ownerRelation_reasonDeletingId_fkey" FOREIGN KEY ("reasonDeletingId") REFERENCES "reasonDeleting"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ownerRelation" ADD CONSTRAINT "ownerRelation_ownerCooperationId_fkey" FOREIGN KEY ("ownerCooperationId") REFERENCES "ownerCooperation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ownerRelation" ADD CONSTRAINT "ownerRelation_relationshipTypeId_fkey" FOREIGN KEY ("relationshipTypeId") REFERENCES "relationshipType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buildingCharacter" ADD CONSTRAINT "buildingCharacter_wallMaterialId_fkey" FOREIGN KEY ("wallMaterialId") REFERENCES "wallMaterial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buildingCharacter" ADD CONSTRAINT "buildingCharacter_overlapsId_fkey" FOREIGN KEY ("overlapsId") REFERENCES "overlaps"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buildingCharacter" ADD CONSTRAINT "buildingCharacter_heatingSystemId_fkey" FOREIGN KEY ("heatingSystemId") REFERENCES "heatingSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buildingCharacter" ADD CONSTRAINT "buildingCharacter_buildingConditionId_fkey" FOREIGN KEY ("buildingConditionId") REFERENCES "buildingCondition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buildingCharacter" ADD CONSTRAINT "buildingCharacter_buildingSeriaId_fkey" FOREIGN KEY ("buildingSeriaId") REFERENCES "buildingSeria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buildingCharacter" ADD CONSTRAINT "buildingCharacter_waterSupplyId_fkey" FOREIGN KEY ("waterSupplyId") REFERENCES "waterSupply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buildingCharacter" ADD CONSTRAINT "buildingCharacter_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "parking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "residenceType" ADD CONSTRAINT "residenceType_objectTypeId_fkey" FOREIGN KEY ("objectTypeId") REFERENCES "objectType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
