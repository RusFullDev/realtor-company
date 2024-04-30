import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingCharacterService } from './building-character.service';
import { CreateBuildingCharacterDto } from './dto/create-building-character.dto';
import { UpdateBuildingCharacterDto } from './dto/update-building-character.dto';

@Controller('building-character')
export class BuildingCharacterController {
  constructor(private readonly buildingCharacterService: BuildingCharacterService) {}

  @Post()
  create(@Body() createBuildingCharacterDto: CreateBuildingCharacterDto) {
    return this.buildingCharacterService.create(createBuildingCharacterDto);
  }

  @Get()
  findAll() {
    return this.buildingCharacterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingCharacterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingCharacterDto: UpdateBuildingCharacterDto) {
    return this.buildingCharacterService.update(+id, updateBuildingCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingCharacterService.remove(+id);
  }
}
