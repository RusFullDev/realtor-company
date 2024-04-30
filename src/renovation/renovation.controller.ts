import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RenovationService } from './renovation.service';
import { CreateRenovationDto } from './dto/create-renovation.dto';
import { UpdateRenovationDto } from './dto/update-renovation.dto';

@Controller('renovation')
export class RenovationController {
  constructor(private readonly renovationService: RenovationService) {}

  @Post()
  create(@Body() createRenovationDto: CreateRenovationDto) {
    return this.renovationService.create(createRenovationDto);
  }

  @Get()
  findAll() {
    return this.renovationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.renovationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRenovationDto: UpdateRenovationDto) {
    return this.renovationService.update(+id, updateRenovationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.renovationService.remove(+id);
  }
}
