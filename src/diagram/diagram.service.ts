import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diagram } from './diagram.entity';
import { ItemDTO } from './dto/diagram.dto';

@Injectable()
export class DiagramService {
  constructor(
    @InjectRepository(Diagram) private diagramRepository: Repository<Diagram>,
  ) {}

  async findAll(): Promise<Diagram[]> {
    return this.diagramRepository.find();
  }

  async create(dto: ItemDTO): Promise<Diagram> {
    const data = await this.diagramRepository.create(dto);
    return data;
  }
}
