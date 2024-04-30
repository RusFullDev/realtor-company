import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WaterSupplyService } from './water-supply.service';
import { CreateWaterSupplyDto } from './dto/create-water-supply.dto';
import { UpdateWaterSupplyDto } from './dto/update-water-supply.dto';

@Controller('water-supply')
export class WaterSupplyController {
  constructor(private readonly waterSupplyService: WaterSupplyService) {}

  @Post()
  create(@Body() createWaterSupplyDto: CreateWaterSupplyDto) {
    return this.waterSupplyService.create(createWaterSupplyDto);
  }

  @Get()
  findAll() {
    return this.waterSupplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waterSupplyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWaterSupplyDto: UpdateWaterSupplyDto) {
    return this.waterSupplyService.update(+id, updateWaterSupplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waterSupplyService.remove(+id);
  }
}
