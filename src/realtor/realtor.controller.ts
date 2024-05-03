import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RealtorService } from './realtor.service';
import { CreateRealtorDto } from './dto/create-realtor.dto';
import { UpdateRealtorDto } from './dto/update-realtor.dto';

@Controller('realtor')
export class RealtorController {
  constructor(private readonly realtorService: RealtorService) {}

  @Post()
  create(@Body() createRealtorDto: CreateRealtorDto) {
    return this.realtorService.create(createRealtorDto);
  }

  @Get()
  findAll() {
    return this.realtorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.realtorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRealtorDto: UpdateRealtorDto) {
    return this.realtorService.update(+id, updateRealtorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.realtorService.remove(+id);
  }
}
