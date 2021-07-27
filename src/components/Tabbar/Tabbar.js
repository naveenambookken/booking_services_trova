import React from 'react'
import './Tabbar.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IconButton } from '@material-ui/core';


function Tabbar() {
    return (
      <div>
         
        <div className="tabbar">
         <div className="arrowBtn">
         <IconButton>
            <ChevronLeftIcon style={{ color: "white" }} />
          </IconButton>
         </div>
         <div className="menus">
         <p >Request</p>
          <p >Services</p>
          <p >Payments</p>
         </div>
        </div>
      </div>
    );
}

export default Tabbar
