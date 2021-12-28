import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const table = new Table({
  name: 'diagram',
  columns: [
    {
      name: 'id',
      type: 'uuid',
      isPrimary: true,
      default: 'uuid_generate_v4()',
    },
    {
      name: 'name',
      type: 'text',
      isNullable: false,
    },
    {
      name: 'structure',
      type: 'jsonb',
      isNullable: false,
      default: "'{}'::jsonb",
    },
  ],
});

export class CreateDiagramModel1640609200685 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table);
    await queryRunner.query(`DROP EXTENSION IF EXISTS "uuid-ossp"`);
  }
}
