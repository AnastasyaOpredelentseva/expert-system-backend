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

  async findOne(id: string): Promise<Diagram[]> {
    return this.diagramRepository.find({ id: id });
  }

  async delete(id: string): Promise<null> {
    await this.diagramRepository.delete({ id: id });
    return null;
  }

  async create(dto: ItemDTO): Promise<Diagram> {
    const data = await this.diagramRepository.create(dto);
    return data;
  }

  async update(id: string, dto: ItemDTO): Promise<Diagram> {
    const data = await this.diagramRepository.findOne({ id: id });
    data.name = dto.name;
    data.structure = dto.structure;
    data.save();
    return data;
  }
}
