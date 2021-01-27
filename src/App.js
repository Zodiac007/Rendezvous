import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";
import BG from "./img/bg.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding: theme.spacing(2),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="head-container">
        <h1 className="head animate__animated animate__backInUp animate__delay-1s animate__slow">
          Rendezvous
        </h1>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <h1 className="bg-head animate__animated animate__bounceInLeft animate__slow">
            Book your Time slot
          </h1>
          <p className="bg-para animate__animated animate__bounceInLeft animate__slow animate__delay-1s">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text
          </p>
          <div className="button animate__animated animate__bounceInLeft animate__slow animate__delay-2s">
            Scroll Down and Book Your Slot
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="image-container">
            <img
              src={BG}
              className="animate__animated animate__bounceInRight animate__slower animate__delay-3s image"
              alt="BG image"
            />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
