import {
    Avatar,
    Button,
   
    IconButton,
    Paper,
   
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import React from "react";
  import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
  import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StepProgress from "../StepProgres/StepProgress";
  
  
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
    btn1:{
      backgroundColor:"white",
      color:"#0d6efd",
      fontWeight:"bold",
      border: "2px solid #0d6efd " ,
      textTransform:"initial",
      
    },
    btn2:{
      backgroundColor:"#0d6efd !important" ,
       color:"white",
       fontWeight:"bold",
       textTransform:"initial"
      
    },
    more:{
      fontSize:"small"
    }
  
  });
  
  function Payment() {
    const classes = useStyles();
    return (
      <div className={classes.root} >
          <Paper elevation={10} className={classes.paperStyle}>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            
           <div className="titlecard">
              <h4 className={classes.cardTitle} >Pending Payment</h4>
              <p className={classes.fadeText}>10:22 am, 12/01/2019</p>
           </div>
           <div>

           <StepProgress step="2"/>
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
             Service is complete, please confirm payment amount:
           </p>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <div style={{display:"flex"}}>
           <div style={{textAlign:"left",margin:"10px"}}>
            <MonetizationOnOutlinedIcon style={{color:"#0d6efd"}} />
           </div>
           <div style={{marginTop:"10px",}}>
             <p style={{fontWeight:"bold"}}>
               Invoice item:
             </p>
             <p>
               Session Price
             </p>
           </div>
           </div>
           <div style={{display:"flex",alignItems:"flex-end",margin:"0px 30px 0px 0px"}}>
               <p style={{fontWeight:"bold",color:"#d46f1d",fontSize:"large"}}>$80.00</p>
           </div>
           </div>
           
           <div style={{fontWeight:"bold",marginTop:"30px",paddingBottom:"20px",display:"flex",justifyContent:"space-around"}}>
             <Button variant="outlined" size="large" className={classes.btn1}>Start a Chat</Button>
             <Button variant="contained" size="large" className={classes.btn2}>Resend Invoice</Button>
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
  
  export default Payment;
  