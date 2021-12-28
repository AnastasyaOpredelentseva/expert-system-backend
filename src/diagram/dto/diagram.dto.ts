import { IsString } from 'class-validator';

export class ItemDTO implements Readonly<ItemDTO> {
  @IsString()
  name: string;

  @IsString()
  structure: string;
}
