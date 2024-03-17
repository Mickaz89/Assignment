import React from 'react';
import { Box, CircularProgress, Grid, Pagination, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import List from './List';
import { PlayersData, StatsData } from '../interfaces';
import { nextPage, onSearch } from '../redux/nba.slice';
import { StyledLoadingContainer } from '../styles';


interface FetchListProps {
  title: string;
  data: PlayersData | StatsData,
  loading: boolean,
  pagination: boolean,
  page?: number,
  error: string,
}

const FetchList: React.FC<FetchListProps> = ({ title, data, loading, pagination, page, error }) => {

  const { searchKey } = useAppSelector((state) => state.nba)


  const dispatch = useAppDispatch();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(nextPage(value));
  };

  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      {

        loading ? (

          <StyledLoadingContainer>
            <CircularProgress />
          </StyledLoadingContainer>

        ) : (
          <>
            {
              pagination &&
              <TextField
                fullWidth
                onChange={(e) => dispatch(onSearch(e.target.value))}
                value={searchKey}
                placeholder='Search by name'
              />
            }

            {error && <Typography color="error">{error}</Typography>}

            <List data={data.data} />

            {
              pagination &&
              <Grid container justifyContent="center">
                <Pagination count={10} page={page} onChange={handlePageChange} />
              </Grid>
            }
          </>
        )
      }
      <Typography></Typography>
    </Box>
  );
};

export default FetchList;
