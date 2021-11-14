import React from 'react';
import {Icon} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import './profile.css';

function Profile(){

    return(
        <div className="profile-container">
            <img className="profile-icon" src="https://i.ibb.co/3ddJYzv/picture1-min-1.jpg"></img>
            <div>
                <div className="user_name">
                    <h3>taigasymphony</h3>
                    <div>editprofile</div>
                    <SettingsIcon/>
                </div>
            
                <div className="numberOf_follow">
                    <p>30 post </p>
                    <p>203frowers</p>
                    <p>223flowing</p>
                </div>
                <div>
                    <div>こんにちは私は埼玉出身です</div>
                </div>
                </div>
        </div>
    )
}

export default Profile;