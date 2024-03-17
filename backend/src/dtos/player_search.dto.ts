import { IsArray, IsOptional, IsString } from 'class-validator';

export class PlayerSearchDto {
  @IsOptional()
  @IsString()
  cursor?: string;

  @IsOptional()
  @IsString()
  per_page?: string;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  first_name?: string;

  @IsOptional()
  @IsString()
  last_name?: string;

  @IsOptional()
  @IsArray()
  @IsString()
  team_ids?: string[];

  @IsOptional()
  @IsArray()
  @IsString()
  player_ids?: string[];
}
