import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Diagram } from './diagram.entity';
import { DiagramService } from './diagram.service';

@Controller('/api')
export class DiagramController {
  constructor(private getCVService: DiagramService) {}

  @Get('findAll')
  @HttpCode(200)
  async findAll(@Res() response: Response): Promise<Diagram[]> {
    const data = await this.getCVService.findAll();

    response.status(HttpStatus.OK).send(data);
    return data;
  }

  @Get('find')
  @HttpCode(200)
  async findOne(
    @Query('id') id: string,
    @Res() response: Response,
  ): Promise<Diagram[]> {
    const data = await this.getCVService.findOne(id);

    response.status(HttpStatus.OK).send(data);
    return data;
  }

  @Post('create')
  @HttpCode(200)
  async create(
    @Query('name') name: string,
    @Query('structure') structure: string,
    @Res() response: Response,
  ): Promise<Diagram> {
    const data = await (
      await this.getCVService.create({ name, structure })
    ).save();

    response.status(HttpStatus.OK).send(data);
    return data;
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Query('name') name: string,
    @Query('structure') structure: string,
    @Res() response: Response,
  ): Promise<Diagram> {
    const data = await this.getCVService.update(id, { name, structure });

    response.status(HttpStatus.OK).send(data);
    return data;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    const data = await this.getCVService.delete(id);
    response.status(HttpStatus.OK).send(data);
  }
}
