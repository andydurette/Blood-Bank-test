import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks

export const getUserAppointment = createAsyncThunk(
    'api/userAppointment',
    async (payload, thunkAPI) => {
        const { getState } = thunkAPI;
        const state = getState();
      try {
        const response = await axios.post("/api/userUserAppointment", { params: {user_id: state.auth.userId}});
        console.log(response.data);
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
    addAppointment: {},
  };

const addAppointmentSlice = createSlice({
    name: 'addAppointment',
    initialState,
    reducers: {},
    // extraReducers: {
    //     [getUserAppointments.fulfilled] : (state, action) => {
    //         state.myAppointmentss = action.payload;
    //     },
    //     [getUserAppointments.rejected] : (state, action) => {
            
    //     },
    // },
});

// export const selectMyAppointments = (state) => state.auth.loggedIn;

export default addAppointmentSlice.reducer;