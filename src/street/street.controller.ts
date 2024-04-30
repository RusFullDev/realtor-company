import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StreetService } from './street.service';
import { CreateStreetDto } from './dto/create-street.dto';
import { UpdateStreetDto } from './dto/update-street.dto';

@Controller('street')
export class StreetController {
  constructor(private readonly streetService: StreetService) {}

  @Post()
  create(@Body() createStreetDto: CreateStreetDto) {
    return this.streetService.create(createStreetDto);
  }

  @Get()
  findAll() {
    return this.streetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.streetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStreetDto: UpdateStreetDto) {
    return this.streetService.update(+id, updateStreetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.streetService.remove(+id);
  }
}
