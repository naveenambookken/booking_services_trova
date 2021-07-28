import React from 'react'
import './Tabbar.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Badge, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Tabbar() {
  const history = useHistory();
  const location = useLocation();
  
    return (
      <div>
        
        <div className="tabbar">
         <div className="arrowBtn">
         <IconButton>
            <ChevronLeftIcon style={{ color: "white" }} />
          </IconButton>
         </div>
         <div className="menus">
         

          <a onClick={()=>history.push("/request")} className={location.pathname==="/request" ? "link" : ""} >Request</a>
         
          <Badge variant="dot" color="secondary" >
          <a onClick={()=>history.push("/services")} className={location.pathname==="/services" ? "link" : ""} >Services</a>
          </Badge>
          <Badge variant="dot" color="secondary" >
          <a onClick={()=>history.push("/payment")} className={location.pathname==="/payment" ? "link" : ""}  >Payments</a>
          </Badge>
         </div>
        </div>
      
      </div>
    );
}

export default Tabbar
