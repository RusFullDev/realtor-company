import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingSeriaService } from './building-seria.service';
import { CreateBuildingSeriaDto } from './dto/create-building-seria.dto';
import { UpdateBuildingSeriaDto } from './dto/update-building-seria.dto';

@Controller('building-seria')
export class BuildingSeriaController {
  constructor(private readonly buildingSeriaService: BuildingSeriaService) {}

  @Post()
  create(@Body() createBuildingSeriaDto: CreateBuildingSeriaDto) {
    return this.buildingSeriaService.create(createBuildingSeriaDto);
  }

  @Get()
  findAll() {
    return this.buildingSeriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingSeriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingSeriaDto: UpdateBuildingSeriaDto) {
    return this.buildingSeriaService.update(+id, updateBuildingSeriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingSeriaService.remove(+id);
  }
}
