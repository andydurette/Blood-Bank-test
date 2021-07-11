import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../features/HomePage/HomePage';
import LoginPage from '../features/LoginPage/LoginPage';
import myAppointmentsPage from '../features/MyAppointmentsPage/MyAppointmentsPage';
import addAppointmentPage from '../features/AddAppointmentPage/AddAppointmentPage';
import NavBar from '../features/NavBar/NavBar';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute.js'
import "../themeStyles/GlobalStyles.css";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectLoginStatus, selectUserId, selectUserName } from '../features/auth/authSlice';

function App() {

  const user = useSelector(selectUserId);
  const userName = useSelector(selectUserName);
  const loginStatus = useSelector(selectLoginStatus);
  
  const dispatch = useDispatch();
  useEffect(() => {
      let mounted = true;
      if (mounted) {
        dispatch(login());
      }
      return () => {
        mounted = false;
      };
    }, [dispatch]);
  
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          {
            loginStatus ? null : (
              <Route path='/login' component={LoginPage} />
            )
          }
          <PrivateRoute path="/myAppointments" component={myAppointmentsPage} />
          <PrivateRoute path="/addAppointment" component={addAppointmentPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;