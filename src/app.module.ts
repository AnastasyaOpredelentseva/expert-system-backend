import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from './config';

import { DiagramModule } from './diagram/diagram.module';

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), DiagramModule],
})
export class AppModule {}
