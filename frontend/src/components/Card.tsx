import React from 'react';
import { Box, Typography } from '@mui/material';
import { StyledPlayerCard } from '../styles';
import { Player, Stat } from '../interfaces';
import { Stats } from './Stats';

interface CardProps {
  data: Stat | Player
}

const isStat = (data: Stat | Player): data is Stat => {
  return (data as Stat).fga !== undefined;
};

  const Card: React.FC<CardProps> = ({data}) => {

    const player = isStat(data) ? (data as Stat).player : data as Player;

    return (
            <StyledPlayerCard key={player.id}>
                <Box>
                    <Typography >{player.first_name}</Typography>
                    <Typography>{player.last_name}</Typography>
                </Box>
                {
                  isStat(data) &&
                  <Stats data={data} />

                }
            </StyledPlayerCard>
    );
  };

  export default Card;