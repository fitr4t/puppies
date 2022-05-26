import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PuppyDTO } from './puppies.dto';
import { AppService } from './puppies.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  registerPuppy(@Body() data: PuppyDTO){
    return this.appService.register(data);
  }

  @Get(':id')
  getPuppy(id: string){
    return this.appService.read(id);
  }

  @Get('/all')
  getPupppies(){
    return this.appService.readAll();
  }

  @Put(':id')
  updatePuppy(@Param('id') id: string,@Body() data: Partial<PuppyDTO>){
    return this.appService.update(id, data);
  }

  @Delete(':id')
  deletePuppy(@Param('id') id: string){
    return this.appService.delete(id);
  }
}
