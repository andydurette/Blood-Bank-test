import React from 'react';
import {selectLoginStatus, selectUserName } from '../auth/authSlice';
import { useSelector } from 'react-redux';

export default function HomePage() {

    const userName = useSelector(selectUserName);
    const loginStatus = useSelector(selectLoginStatus);

    return  (
        <div style={{padding: 10}}>
        {
        loginStatus ? (
            <h1>Welcome back {userName}</h1>
        ):  <>
            <h1>Welcome to Blood Bank</h1>
            <p>please log in or create and account to book and view your appointments</p>
            </>
        }
        </div>
    )
}