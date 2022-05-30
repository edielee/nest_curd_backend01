import { IsNumber, isNumber, IsOptional, IsString } from 'class-validator';

export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export class CreateDto {
  @IsNumber()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  userData?: UserData;
}

interface UserData {
  name?: string;
  userId?: number;
}
