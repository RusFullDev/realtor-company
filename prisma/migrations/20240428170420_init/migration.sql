-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "hashedRefreshToken" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_studio" BOOLEAN NOT NULL,
    "floor" INTEGER NOT NULL,
    "floors_in_building" INTEGER NOT NULL,
    "total_area" INTEGER NOT NULL,
    "live_area" INTEGER NOT NULL,
    "kitchen_area" INTEGER NOT NULL,
    "rooms_area" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "price_per_square" DECIMAL(65,30) NOT NULL,
    "price_type" TEXT NOT NULL,
    "is_apartment" BOOLEAN NOT NULL,
    "is_luxury" BOOLEAN NOT NULL,
    "ceiling_height" INTEGER NOT NULL,
    "combined_bath_count" INTEGER NOT NULL,
    "separate_bath_count" INTEGER NOT NULL,
    "loggia_count" INTEGER NOT NULL,
    "loggia_description" TEXT NOT NULL,
    "balcony_count" INTEGER NOT NULL,
    "balcony_description" TEXT NOT NULL,
    "general_description" TEXT NOT NULL,
    "cadastral_number" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "layout" TEXT NOT NULL,
    "fotos" TEXT NOT NULL,
    "online_show" BOOLEAN NOT NULL,
    "video" TEXT NOT NULL,
    "realtorId" INTEGER,
    "ownerRelationId" INTEGER,
    "addressId" INTEGER,
    "buildingCharacterId" INTEGER,
    "objectTypeId" INTEGER,
    "residenceTypeId" INTEGER,
    "objectCategoryId" INTEGER,
    "objectStatusId" INTEGER,
    "currencyId" INTEGER,
    "renovationId" INTEGER,
    "windowSideId" INTEGER,
    "roomTypeId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "object_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "realtor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "reg_date" TIMESTAMP(3) NOT NULL,
    "deactivate_date" TIMESTAMP(3) NOT NULL,
    "photo" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "figma_id" INTEGER NOT NULL,

    CONSTRAINT "realtor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owner-relation" (
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

    CONSTRAINT "owner-relation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "house_number" INTEGER NOT NULL,
    "apartment_number" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "location_description" TEXT NOT NULL,
    "regionId" INTEGER,
    "districtId" INTEGER,
    "metroId" INTEGER,
    "areaId" INTEGER,
    "mahallaId" INTEGER,
    "streetId" INTEGER,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "building-character" (
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

    CONSTRAINT "building-character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object-type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "object-type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "residence-type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "objectTypeId" INTEGER,

    CONSTRAINT "residence-type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object-category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "object-category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object-status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "object-status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "renovation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "renovation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "window-side" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "window-side_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room-type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "room-type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ownership" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ownership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reason-deleting" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "reason-deleting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owner-cooperation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "owner-cooperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relationship-type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "relationship-type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "district" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "region_id" INTEGER NOT NULL,
    "regionId" INTEGER,

    CONSTRAINT "district_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "area" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "districtId" INTEGER,

    CONSTRAINT "area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mahalla" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "areaId" INTEGER,

    CONSTRAINT "mahalla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "street" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mahallaId" INTEGER,

    CONSTRAINT "street_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metro" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "metro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wall-material" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "wall-material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "overlaps" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "overlaps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "heating-system" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "heating-system_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "building-condition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "building-condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "building-seria" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "building-seria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water-supply" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "water-supply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parking" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "parking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "realtor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_ownerRelationId_fkey" FOREIGN KEY ("ownerRelationId") REFERENCES "owner-relation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_buildingCharacterId_fkey" FOREIGN KEY ("buildingCharacterId") REFERENCES "building-character"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_objectTypeId_fkey" FOREIGN KEY ("objectTypeId") REFERENCES "object-type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_residenceTypeId_fkey" FOREIGN KEY ("residenceTypeId") REFERENCES "residence-type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_objectCategoryId_fkey" FOREIGN KEY ("objectCategoryId") REFERENCES "object-category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_objectStatusId_fkey" FOREIGN KEY ("objectStatusId") REFERENCES "object-status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "currency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "renovation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_windowSideId_fkey" FOREIGN KEY ("windowSideId") REFERENCES "window-side"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object" ADD CONSTRAINT "object_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "room-type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner-relation" ADD CONSTRAINT "owner-relation_ownershipId_fkey" FOREIGN KEY ("ownershipId") REFERENCES "ownership"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner-relation" ADD CONSTRAINT "owner-relation_reasonDeletingId_fkey" FOREIGN KEY ("reasonDeletingId") REFERENCES "reason-deleting"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner-relation" ADD CONSTRAINT "owner-relation_ownerCooperationId_fkey" FOREIGN KEY ("ownerCooperationId") REFERENCES "owner-cooperation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner-relation" ADD CONSTRAINT "owner-relation_relationshipTypeId_fkey" FOREIGN KEY ("relationshipTypeId") REFERENCES "relationship-type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "district"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_metroId_fkey" FOREIGN KEY ("metroId") REFERENCES "metro"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_mahallaId_fkey" FOREIGN KEY ("mahallaId") REFERENCES "mahalla"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "street"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building-character" ADD CONSTRAINT "building-character_wallMaterialId_fkey" FOREIGN KEY ("wallMaterialId") REFERENCES "wall-material"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building-character" ADD CONSTRAINT "building-character_overlapsId_fkey" FOREIGN KEY ("overlapsId") REFERENCES "overlaps"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building-character" ADD CONSTRAINT "building-character_heatingSystemId_fkey" FOREIGN KEY ("heatingSystemId") REFERENCES "heating-system"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building-character" ADD CONSTRAINT "building-character_buildingConditionId_fkey" FOREIGN KEY ("buildingConditionId") REFERENCES "building-condition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building-character" ADD CONSTRAINT "building-character_buildingSeriaId_fkey" FOREIGN KEY ("buildingSeriaId") REFERENCES "building-seria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building-character" ADD CONSTRAINT "building-character_waterSupplyId_fkey" FOREIGN KEY ("waterSupplyId") REFERENCES "water-supply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building-character" ADD CONSTRAINT "building-character_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "parking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "residence-type" ADD CONSTRAINT "residence-type_objectTypeId_fkey" FOREIGN KEY ("objectTypeId") REFERENCES "object-type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "district" ADD CONSTRAINT "district_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "area" ADD CONSTRAINT "area_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "district"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mahalla" ADD CONSTRAINT "mahalla_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "street" ADD CONSTRAINT "street_mahallaId_fkey" FOREIGN KEY ("mahallaId") REFERENCES "mahalla"("id") ON DELETE SET NULL ON UPDATE CASCADE;
