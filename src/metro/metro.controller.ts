import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetroService } from './metro.service';
import { CreateMetroDto } from './dto/create-metro.dto';
import { UpdateMetroDto } from './dto/update-metro.dto';

@Controller('metro')
export class MetroController {
  constructor(private readonly metroService: MetroService) {}

  @Post()
  create(@Body() createMetroDto: CreateMetroDto) {
    return this.metroService.create(createMetroDto);
  }

  @Get()
  findAll() {
    return this.metroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetroDto: UpdateMetroDto) {
    return this.metroService.update(+id, updateMetroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metroService.remove(+id);
  }
}
