import { IsArray, IsOptional, IsString } from 'class-validator';

export class StatSearchDto {
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
  @IsString({ each: true })
  team_ids?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  player_ids?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  game_ids?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  dates?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  seasons?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  start_date?: string[];
}
