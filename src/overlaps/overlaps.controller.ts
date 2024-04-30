import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OverlapsService } from './overlaps.service';
import { CreateOverlapDto } from './dto/create-overlap.dto';
import { UpdateOverlapDto } from './dto/update-overlap.dto';

@Controller('overlaps')
export class OverlapsController {
  constructor(private readonly overlapsService: OverlapsService) {}

  @Post()
  create(@Body() createOverlapDto: CreateOverlapDto) {
    return this.overlapsService.create(createOverlapDto);
  }

  @Get()
  findAll() {
    return this.overlapsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.overlapsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOverlapDto: UpdateOverlapDto) {
    return this.overlapsService.update(+id, updateOverlapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.overlapsService.remove(+id);
  }
}
