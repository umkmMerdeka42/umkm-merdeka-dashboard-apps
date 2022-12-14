import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_ENDPOINT from '../global/api-endpoint';
import axios from 'axios';

const { LOGIN, LOGOUT, SESSION } = API_ENDPOINT;

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const loginUser = createAsyncThunk('user/loginUser', async(user, thunkAPI) => {
  try {
    const response = await axios.post(LOGIN, {
      email: user.email,
      password: user.password
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const sessionUser = createAsyncThunk('user/session', async(_, thunkAPI) => {
  try {
    const response = await axios.get(SESSION);
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const logoutUser = createAsyncThunk('user/logout', async() => {
  await axios.delete(LOGOUT);
});

export const authSlice = createSlice({
  name: 'aut',
  initialState,
  reducers:{
    reset: (state) => initialState
  },
  extraReducers:(builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //Session Users login
    builder.addCase(sessionUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sessionUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(sessionUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
