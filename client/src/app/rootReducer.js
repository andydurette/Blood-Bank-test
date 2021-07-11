import { combineReducers } from '@reduxjs/toolkit';
/// /
import authReducer from '../features/auth/authSlice';
import myAppointmentsReducer from '../features/MyAppointmentsPage/myAppointmentsSlice';
import addAppointmentReducer from '../features/AddAppointmentPage/addAppointmentSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  myAppointments: myAppointmentsReducer,
  addAppointment: addAppointmentReducer,
});

export default rootReducer;
