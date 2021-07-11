import React, { useEffect } from 'react';
// import { login, logout, selectLoginStatus, selectUserId, selectUserName } from '../auth/authSlice';
import { getUserAppointments } from './myAppointmentsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function MyAppointmentsPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAppointments());
    }, [dispatch])

    return  (
        <div>
        <h1>My Appointments</h1>
        </div>
    )
}