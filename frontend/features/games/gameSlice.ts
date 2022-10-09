import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { stat } from 'fs';
import { Game } from '../../type/Game';

interface GameState {
  singleGame: Game | null;
  games: Game[] | null;
  loading: boolean;
  errors: any;
}
const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
  errors: null,
};

/* 
action get data from be 
*/
export const getGames = createAsyncThunk<Game[]>(
  'games/getGames',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('http://localhost:8080/api/games');
      thunkApi.dispatch(getGames());
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createGame = createAsyncThunk<Object, Game>(
  'game/createGame',
  async (data, thunkAPi) => {
    try {
      const res = await axios.post(
        'http://localhost:8080/api/games/game',
        data
      );
      return res.data;
    } catch (error) {
      thunkAPi.rejectWithValue(error);
    }
  }
);

/*
reducers chcange the state
*/

export const gameSice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGames.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.loading = false;
    });
    builder.addCase(getGames.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default gameSice.reducer;
export const { setGames } = gameSice.actions;
