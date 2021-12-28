import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Diagram } from './diagram.entity';
import { DiagramService } from './diagram.service';

@Controller('/api')
export class DiagramController {
  constructor(private getCVService: DiagramService) {}

  @Get()
  @HttpCode(200)
  async findAll(@Res() response: Response): Promise<Diagram[]> {
    const data = await this.getCVService.findAll();

    response.status(HttpStatus.OK).send(data);
    return data;
  }

  @Post()
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
}
