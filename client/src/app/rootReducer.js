import { combineReducers } from '@reduxjs/toolkit';
/// /
import authReducer from '../features/auth/authSlice';
import myRecipesReducer from '../features/MyRecipesPage/myRecipesSlice';
import AddAppointmentReducer from '../features/AddAppointmentPage/AddAppointmentSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  myRecipes: myRecipesReducer,
  addAppointment: AddAppointmentReducer,
});

export default rootReducer;
