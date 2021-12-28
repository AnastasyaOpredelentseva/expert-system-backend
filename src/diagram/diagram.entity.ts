import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'diagram' })
export class Diagram extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column({ type: 'jsonb', default: {} })
  structure?: string;
}
