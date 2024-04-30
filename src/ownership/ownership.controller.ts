import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnershipService } from './ownership.service';
import { CreateOwnershipDto } from './dto/create-ownership.dto';
import { UpdateOwnershipDto } from './dto/update-ownership.dto';

@Controller('ownership')
export class OwnershipController {
  constructor(private readonly ownershipService: OwnershipService) {}

  @Post()
  create(@Body() createOwnershipDto: CreateOwnershipDto) {
    return this.ownershipService.create(createOwnershipDto);
  }

  @Get()
  findAll() {
    return this.ownershipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownershipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOwnershipDto: UpdateOwnershipDto) {
    return this.ownershipService.update(+id, updateOwnershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownershipService.remove(+id);
  }
}
