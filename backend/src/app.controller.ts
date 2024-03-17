import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Player, Stat } from './interfaces';
import { PlayerSearchDto } from './dtos/player_search.dto';
import { StatSearchDto } from './dtos/stat_search.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/players')
  async getAllPlayers(
    @Query()
    options: PlayerSearchDto,
  ): Promise<Player[]> {
    try {
      const players = await this.appService.getAllPlayers(options);
      return players;
    } catch (error) {
      throw error;
    }
  }

  @Get('/stats')
  async getAllStats(
    @Query()
    options: StatSearchDto,
  ): Promise<Stat[]> {
    try {
      const stats = await this.appService.getAllStats(options);
      return stats;
    } catch (error) {
      throw error;
    }
  }
}
