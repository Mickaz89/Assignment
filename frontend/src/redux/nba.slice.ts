import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { PlayersData, StatsData} from '../interfaces'
import { AppDispatch, RootState } from './store'
import { act } from 'react-dom/test-utils'

interface NbaState {
    playersData: PlayersData,
    statsData: StatsData,
    playersLoading: boolean,
    statsLoading: boolean,
    page: number,
    cursor: number,
    searchKey: string
    errorPlayers: string
    errorStats: string
}

const initialPlayersData: PlayersData = {
    data: [],
    meta: {
      per_page: 0,
      next_cursor: 0,
      prev_cursor: 0,
    },
  };

const initialStatsData: StatsData = {
    data: [],
    meta: {
      per_page: 0,
      next_cursor: 0,
      prev_cursor: 0,
    },
  };

const initialState: NbaState = {
  playersData: initialPlayersData,
  statsData: initialStatsData,
  searchKey: "",
  playersLoading: false,
  statsLoading: false,
  cursor: 0,
  page: 1,
  errorPlayers: "",
  errorStats: ""

}

export const nbaSlice = createSlice({
  name: 'nba',
  initialState,
  reducers: {
    playersStartLoading: (state) => {
        state.playersLoading = true
    },
    statsStartLoading: (state) => {
        state.statsLoading = true
    },
    fetchStatsSuccess: (state, action: PayloadAction<StatsData>) => {
        state.statsLoading = false;
        state.statsData = action.payload;
    },
    fetchPlayersSuccess: (state, action: PayloadAction<PlayersData>) => {
        state.playersData = action.payload;
        state.playersLoading = false;
        state.cursor = action.payload.meta.next_cursor;
    },
    nextPage(state, action: PayloadAction<number>){
        const page = action.payload
        state.page = page
    },
    onSearch(state, action: PayloadAction<string>){
        console.log('on search ', action.payload)
        state.searchKey = action.payload;
    },
    onPlayersError(state, action: PayloadAction<string>){
      state.playersLoading = false;
      state.errorPlayers = action.payload
    },
    onStatsError(state, action: PayloadAction<string>){
      state.statsLoading = false;
      state.errorStats = action.payload
    }
  },
})

export const {
    playersStartLoading,
    statsStartLoading,
    fetchPlayersSuccess,
    fetchStatsSuccess,
    nextPage,
    onSearch,
    onPlayersError,
    onStatsError
} = nbaSlice.actions

export const fetchPlayers = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { cursor, searchKey } = getState().nba;
    dispatch(playersStartLoading());
    try {
    let url = `http://localhost:3000/players?cursor=${cursor}&per_page=7`
    if(searchKey){
        url += `&search=${searchKey}`
    }
      const response = await axios.get(url);
      dispatch(fetchPlayersSuccess(response.data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(onPlayersError(error.message));
      }
    }
  };

  export const fetchStats = () => async (dispatch: AppDispatch) => {
    dispatch(statsStartLoading());
    try {
      const response = await axios.get(`http://localhost:3000/stats?dates[]=2024-01-01&dates[]=2024-01-02&per_page=6`);
      dispatch(fetchStatsSuccess(response.data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(onStatsError(error.message));
      }
    }
  };

export default nbaSlice.reducer