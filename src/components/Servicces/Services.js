import {
    Avatar,
    Button,
    
    
    IconButton,
    Paper,
    
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import React from "react";
  import ScheduleIcon from '@material-ui/icons/Schedule';
  import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
  import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StepProgress from "../StepProgres/StepProgress";
import { useState } from "react";
  
  
  const useStyles = makeStyles({
    paperStyle: {  maxWidth: "100", margin: "20px" },
    root: {
      flexGrow: 1,
    },
    cardTitle:{
      textAlign: "left",
      color: "#d46f1d",
     padding: "20px 0px 0px 10px"
    },
    fadeText:{
      margin: "0px",
      opacity: ".5",
      fontWeight: "700",
      textAlign: "left",
      padding:"0px 0px 0px 10px",
    },
    avatarStyle:{
      width:"60px",
      height:"60px"
    },
    profile:{
      margin:"15px 0px 0px 10px",
      display:"flex",
      justifyContent:"space-between" 
    },
    userName:{
      
      margin:"10px 0px 0px 7px",
      color:"#0d6efd",
      fontSize:"1.2rem",
      fontWeight:"bold"
    },
    place:{
      
      margin:"0px 0px 0px -2px",
      color:"black",
      fontSize:"1rem",
      fontWeight:"bold"
    },
    texth4:{
      padding:"2px",
      margin:"0px 10px 0px 2px",
      color:"black",
      fontSize:"1rem",
      fontWeight:"bold"
    },
    textp:{
      margin: "0px",
      opacity: ".5",
      fontWeight: "700",
      textAlign: "left",
      padding:"0px 0px 0px 10px",
    },
    btn:{
      backgroundColor:"#0d6efd !important" ,
       color:"white",
       fontWeight:"bold",
       textTransform:"initial"
      
    },
    more:{
      fontSize:"small"
    }
  
  });
  
  function Services() {
    const [status, setstatus] = useState(1)
    const classes = useStyles();

    const handleSubmit =()=>setstatus(2)
    return (
      <div className={classes.root} >
          <Paper elevation={10} className={classes.paperStyle}>
           <div style={{display:"flex", justifyContent:"space-between"}}>
           <div className="titlecard">
              <h4 className={classes.cardTitle} >Upcoming Service</h4>
              <p className={classes.fadeText}>10:22 am, 12/01/2019</p>
           </div>
           <div>

           <StepProgress status={status}/>
           </div>
           </div>
           <div className={classes.profile}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <Avatar className={classes.avatarStyle} alt="Remy Sharp" src="https://remysharp.com/images/remy-2017.jpg" />
           <div>
           <h4 className={classes.userName} >Ray Pressley</h4>
           <h4 className={classes.place} >San Francisco</h4>
           </div>
           </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img className={classes.avatarStyle} src="assets/verifiedpartner.png" alt=""/>
              <h4 className={classes.texth4}>You two had 12 deals before</h4>
            </div>
           </div>
           <p className={classes.textp} >
             Check in here or scan customer's QR Code to check in when the services is about to start
           </p>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <div style={{display:"flex"}}>
           <div style={{textAlign:"left",margin:"10px"}}>
            <ScheduleIcon style={{color:"#0d6efd"}} />
           </div>
           <div style={{marginTop:"10px",fontWeight:"bold"}}>
             <p>
               1:00pm, Sunday, December 29th, 2019
             </p>
             
           </div>
           </div>
           </div>
           <div style={{textAlign:"left",color:"#0d6efd", display:"flex"}}>
            <LocationOnOutlinedIcon style={{margin:"10px"}} />
            <p  style={{fontWeight:"bold",marginTop:"10px"}}>
              50 Hagiwara Tea Garden Dr, San Francisco, CA 94118
            </p>
           </div>
           <div style={{fontWeight:"bold",marginTop:"30px",paddingBottom:"20px",display:"flex",justifyContent:"space-around"}}>
             <Button variant="contained" size="large" className={classes.btn}>CheckIn</Button>
             <Button variant="contained" size="large" className={classes.btn} onClick={handleSubmit }>Generate invoice</Button>
             <div style={{color:"#0d6efd",}}>
               <IconButton style={{color:"#0d6efd",padding:"0px"}}>
                 <span style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  
               <MoreHorizIcon fontSize="large"  ></MoreHorizIcon>
               <label className={classes.more}>More</label>
                 </span>
               </IconButton>
             
             </div>
            </div>
          </Paper>
      </div>
    );
  }
  
  export default Services;