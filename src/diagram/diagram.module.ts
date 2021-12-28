import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiagramController } from './diagram.controller';
import { Diagram } from './diagram.entity';
import { DiagramService } from './diagram.service';

@Module({
  imports: [TypeOrmModule.forFeature([Diagram])],
  controllers: [DiagramController],
  providers: [DiagramService],
})
export class DiagramModule {}
