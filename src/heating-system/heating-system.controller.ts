import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeatingSystemService } from './heating-system.service';
import { CreateHeatingSystemDto } from './dto/create-heating-system.dto';
import { UpdateHeatingSystemDto } from './dto/update-heating-system.dto';

@Controller('heating-system')
export class HeatingSystemController {
  constructor(private readonly heatingSystemService: HeatingSystemService) {}

  @Post()
  create(@Body() createHeatingSystemDto: CreateHeatingSystemDto) {
    return this.heatingSystemService.create(createHeatingSystemDto);
  }

  @Get()
  findAll() {
    return this.heatingSystemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heatingSystemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeatingSystemDto: UpdateHeatingSystemDto) {
    return this.heatingSystemService.update(+id, updateHeatingSystemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heatingSystemService.remove(+id);
  }
}
