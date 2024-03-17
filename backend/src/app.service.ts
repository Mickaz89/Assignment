import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Player, Stat } from './interfaces';
import { StatSearchDto } from './dtos/stat_search.dto';
import { PlayerSearchDto } from './dtos/player_search.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  private readonly API_TOKEN = this.configService.get('API_TOKEN');
  private readonly BASE_URL = 'http://api.balldontlie.io/v1';

  async getAllPlayers(options?: PlayerSearchDto): Promise<Player[]> {
    try {
      const response = await axios.get(`${this.BASE_URL}/players`, {
        params: options,
        headers: {
          Authorization: `${this.API_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch players data ${error}`);
    }
  }

  async getAllStats(options?: StatSearchDto): Promise<Stat[]> {
    try {
      const response = await axios.get(`${this.BASE_URL}/stats`, {
        params: options,
        headers: {
          Authorization: `${this.API_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch players data ${error}`);
    }
  }
}
