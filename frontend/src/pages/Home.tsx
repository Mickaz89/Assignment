import React, { useEffect } from 'react';
import FetchList from '../components/FetchList';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchPlayers, fetchStats } from '../redux/nba.slice';
import { Main } from '../styles';
import { debounce } from 'lodash';

export const Home = () => {

    const {
      playersData,
      statsData,
      playersLoading,
      statsLoading,
      page,
      searchKey,
      errorPlayers,
      errorStats
    } = useAppSelector((state) => state.nba)

    const dispatch = useAppDispatch();

    const debounced = debounce((key: string) => {
      dispatch(fetchPlayers());
    }, 500);

    const debouncedFetchPlayers = (key: string) => {
      debounced(key);
  };

    useEffect(() => {
      dispatch(fetchStats())
      dispatch(fetchPlayers())
  }, [dispatch]);

    useEffect(() => {
      debouncedFetchPlayers(searchKey);
      return () => debounced.cancel();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchKey]);


    return (
        <Main>
            <FetchList
                title="Players"
                data={playersData}
                loading={playersLoading}
                pagination
                page={page}
                error={errorPlayers}
            />
            <FetchList
                title="Favorite players"
                data={statsData}
                loading={statsLoading}
                pagination={false}
                error={errorStats}
            />
        </Main>
    );
}

export default Home;