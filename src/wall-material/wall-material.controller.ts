import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WallMaterialService } from './wall-material.service';
import { CreateWallMaterialDto } from './dto/create-wall-material.dto';
import { UpdateWallMaterialDto } from './dto/update-wall-material.dto';

@Controller('wall-material')
export class WallMaterialController {
  constructor(private readonly wallMaterialService: WallMaterialService) {}

  @Post()
  create(@Body() createWallMaterialDto: CreateWallMaterialDto) {
    return this.wallMaterialService.create(createWallMaterialDto);
  }

  @Get()
  findAll() {
    return this.wallMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wallMaterialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWallMaterialDto: UpdateWallMaterialDto) {
    return this.wallMaterialService.update(+id, updateWallMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wallMaterialService.remove(+id);
  }
}
