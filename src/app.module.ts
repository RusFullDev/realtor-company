import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ObjectTypeModule } from './object-type/object-type.module';
import { ResidenceTypeModule } from './residence-type/residence-type.module';
import { ObjectCategoryModule } from './object-category/object-category.module';
import { ObjectStatusModule } from './object-status/object-status.module';
import { CurrencyModule } from './currency/currency.module';
import { RenovationModule } from './renovation/renovation.module';
import { WindowSideModule } from './window-side/window-side.module';
import { RoomTypeModule } from './room-type/room-type.module';
import { OwnershipModule } from './ownership/ownership.module';
import { ReasonDeletingModule } from './reason-deleting/reason-deleting.module';
import { OwnerCooperationModule } from './owner-cooperation/owner-cooperation.module';
import { RelationshipTypeModule } from './relationship-type/relationship-type.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { AreaModule } from './area/area.module';
import { MahallaModule } from './mahalla/mahalla.module';
import { StreetModule } from './street/street.module';
import { MetroModule } from './metro/metro.module';
import { WallMaterialModule } from './wall-material/wall-material.module';
import { OverlapsModule } from './overlaps/overlaps.module';
import { HeatingSystemModule } from './heating-system/heating-system.module';
import { BuildingConditionalModule } from './building-conditional/building-conditional.module';
import { BuildingSeriaModule } from './building-seria/building-seria.module';
import { WaterSupplyModule } from './water-supply/water-supply.module';
import { ParkingModule } from './parking/parking.module';
import { ObjectModule } from './object/object.module';
import { OwnerRelationModule } from './owner-relation/owner-relation.module';
import { AddressModule } from './address/address.module';
import { BuildingCharacterModule } from './building-character/building-character.module';
import { AdminModule } from './admin/admin.module';
import { RealtorModule } from './realtor/realtor.module';




@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,envFilePath:'.env'}),
   PrismaModule, AuthModule,   ObjectTypeModule, ResidenceTypeModule, ObjectCategoryModule,
    ObjectStatusModule, CurrencyModule, RenovationModule, WindowSideModule, RoomTypeModule,
     OwnershipModule, ReasonDeletingModule, OwnerCooperationModule, RelationshipTypeModule, 
     RegionModule, DistrictModule, AreaModule, MahallaModule, StreetModule, MetroModule, 
     WallMaterialModule, OverlapsModule, HeatingSystemModule, 
   BuildingConditionalModule, BuildingSeriaModule, WaterSupplyModule, ParkingModule, ObjectModule, 
   OwnerRelationModule, AddressModule, BuildingCharacterModule, AdminModule, RealtorModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
