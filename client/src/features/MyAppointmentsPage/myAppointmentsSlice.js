import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks

export const getUserAppointments = createAsyncThunk(
    'api/userAppointments',
    async (payload, thunkAPI) => {
        const { getState } = thunkAPI;
        const state = getState();
      try {
        const response = await axios.get("/api/userAppointments", { params: {user_id: state.auth.userId}});
        return response.data
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    },
  );

//   axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })

const initialState = {
    myAppointments: {},
  };

const myAppointmentsSlice = createSlice({
    name: 'myAppointments',
    initialState,
    reducers: {},
    extraReducers: {
        [getUserAppointments.fulfilled] : (state, action) => {
            state.myAppointments = action.payload;
        },
        [getUserAppointments.rejected] : (state, action) => {
            
        },
    },
});

export const selectMyAppointments = (state) => state.auth.loggedIn;

export default myAppointmentsSlice.reducer;