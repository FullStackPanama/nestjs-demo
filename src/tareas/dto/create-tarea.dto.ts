import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTareaDto {
  @IsString()
  @IsNotEmpty()
  tarea: string;

  @IsBoolean()
  @IsNotEmpty()
  terminada: boolean;
}
