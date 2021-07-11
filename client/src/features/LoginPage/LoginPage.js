import React, { useState, useEffect } from 'react';
import googleImage from '../../assets/googleImage.png';
import githubImage from '../../assets/githubImage.png';
import twitterImage from '../../assets/twitterImage.png';
import styles from './LoginPage.module.css';

export default function LoginPage() {

    const [siteUrl, setSiteUrl] = useState('');

    useEffect(() => {
        const siteSettingUrl = window.location.origin;
        console.log('siteUrl', siteSettingUrl)
        if(siteSettingUrl === 'http://localhost:3000'){
            setSiteUrl('http://localhost:4001');
        }else{
            setSiteUrl(siteUrl);
        }
    }, []);

    const googleLogin = () => {
        console.log(`${siteUrl}/auth/google`);
        // window.open(`${siteUrl}/auth/google`, "_self");
        
        if(siteUrl === 'https://test-blood-bank.herokuapp.com/' ){
            window.open('https://test-blood-bank.herokuapp.com/auth/google', "_self");
        }else{
            window.open('http://localhost:4001/auth/google', "_self");
        }
    }

    const githubLogin = () => {
        const siteUrl = window.location.origin.toString();
        window.open(`${siteUrl}/auth/github`, "_self");
    }

    const twitterLogin = () => {
        const siteUrl = window.location.origin.toString();
        window.location.href = `${siteUrl}/auth/twitter`;
    }

    return  (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.googleContainer} onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon"/>
                    <p>Login with google</p>
                </div>
                {/* <div className={`${styles.googleContainer} ${styles.githubContainer}`} onClick={githubLogin}>
                    <img src={githubImage} alt="Github Icon"/>
                    <p>Login with Github</p>
                </div>
                <div className={`${styles.googleContainer} ${styles.twitterContainer}`} onClick={twitterLogin}>
                    <img src={twitterImage} alt="Github Icon"/>
                    <p>Login with Twitter</p>
                </div> */}
        </div>
    </div>
    )
}