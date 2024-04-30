import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MahallaService } from './mahalla.service';
import { CreateMahallaDto } from './dto/create-mahalla.dto';
import { UpdateMahallaDto } from './dto/update-mahalla.dto';

@Controller('mahalla')
export class MahallaController {
  constructor(private readonly mahallaService: MahallaService) {}

  @Post()
  create(@Body() createMahallaDto: CreateMahallaDto) {
    return this.mahallaService.create(createMahallaDto);
  }

  @Get()
  findAll() {
    return this.mahallaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mahallaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMahallaDto: UpdateMahallaDto) {
    return this.mahallaService.update(+id, updateMahallaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mahallaService.remove(+id);
  }
}
