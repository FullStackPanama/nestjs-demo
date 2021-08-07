import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  author_id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
