export interface Team {
    id: number;
    conference: string;
    division: string;
    city: string;
    name: string;
    full_name: string;
    abbreviation: string;
  }

  export interface Stat {
    id: number;
    min: number;
    fgm: number;
    fga: number;
    fg_pct: number;
    fg3m: number;
    fg3a: number;
    fg3_pct: number;
    ftm: number;
    fta: number;
    ft_pct: number;
    oreb: number;
    dreb: number;
    reb: number;
    ast: number;
    stl: number;
    blk: number;
    turnover: number;
    pf: number;
    pts: number;
    player: Player;
    team: Team;
  }

export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    height: string;
    weight: string;
    jersey_number: string;
    college: string;
    country: string;
    draft_year: number;
    draft_round: number;
    draft_number: number;
    team: {
      id: number;
      conference: string;
      division: string;
      city: string;
      name: string;
      full_name: string;
      abbreviation: string;
    };
  }

export interface MetaData {
    next_cursor: number;
    per_page: number
    prev_cursor: number
}

export interface PlayersData {
    data: Player[];
    meta: MetaData;
}

export interface StatsData {
    data: Stat[];
    meta: MetaData;
}
