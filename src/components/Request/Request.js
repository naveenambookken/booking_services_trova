import {
  Avatar,
  Button,
  Grid,
  Icon,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import './Request.css'

const useStyles = makeStyles({
  paperStyle: {  width: "100",height: "300px", margin: "20px" },
  root: {
    flexGrow: 1,
  },
});

function Request() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
        <Paper elevation={10} className={classes.paperStyle}>
         <div className="titlecard">
            <h4 >Pending Request</h4>
            <p>10:22 am, 12/01/2019</p>
         </div>
         <div>
             <Avatar/>
         </div>
        </Paper>
    </div>
  );
}

export default Request;
