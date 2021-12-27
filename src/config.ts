import * as path from 'path';
import type { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default {
  type: 'postgres',
  synchronize: false,
  url: process.env.DATABASE_URL,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  logger: 'advanced-console',
  entities: [path.relative('', path.join(__dirname, '**/*.entity{.ts,.js}'))],
  migrations: [path.relative('', path.join(__dirname, '**/migrations/*.ts'))],
  cli: {
    migrationsDir: path.relative('', path.join(__dirname, 'db/migrations')),
  },
} as ConnectionOptions;
