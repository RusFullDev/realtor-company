import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingConditionalService } from './building-conditional.service';
import { CreateBuildingConditionalDto } from './dto/create-building-conditional.dto';
import { UpdateBuildingConditionalDto } from './dto/update-building-conditional.dto';

@Controller('building-conditional')
export class BuildingConditionalController {
  constructor(private readonly buildingConditionalService: BuildingConditionalService) {}

  @Post()
  create(@Body() createBuildingConditionalDto: CreateBuildingConditionalDto) {
    return this.buildingConditionalService.create(createBuildingConditionalDto);
  }

  @Get()
  findAll() {
    return this.buildingConditionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingConditionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingConditionalDto: UpdateBuildingConditionalDto) {
    return this.buildingConditionalService.update(+id, updateBuildingConditionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingConditionalService.remove(+id);
  }
}
