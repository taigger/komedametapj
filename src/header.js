import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Icon} from '@material-ui/core';
import './header.css'


function Header(){

    return(
        <div className="header">
            <h3>KOMETA</h3>
            <div>
                <HomeIcon/>
                <FavoriteIcon/>
            </div>
        </div>
      
    )

}

export default Header;