import {
  Controller,
  Delete,
  Get,
  Body,
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

  @Get(':id')
  @HttpCode(200)
  async findOne(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<Diagram> {
    const data = await this.getCVService.findOne(id);
    response.status(HttpStatus.OK).send(data);
    return data;
  }

  @Post('create')
  @HttpCode(200)
  async create(
    @Body() data: { name: string; structure: string },
    @Res() response: Response,
  ): Promise<Diagram> {
    const result = await (await this.getCVService.create(data)).save();

    response.status(HttpStatus.OK).send(data);
    return result;
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body() data: { name: string; structure: string },

    @Res() response: Response,
  ): Promise<Diagram> {
    const result = await this.getCVService.update(id, data);

    response.status(HttpStatus.OK).send(result);
    return result;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    const data = await this.getCVService.delete(id);
    response.status(HttpStatus.OK).send(data);
  }
}
