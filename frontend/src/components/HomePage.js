import React from "react";
import {
  Button,
  Grid,
  Typography,
} from "@mui/material";




function HomePage() {
  return (
    <div className={style.homme}>
    <Grid container spacing={1}>
    <Grid item xs={12} align="center">
          <div align="center">
              <img style={{width : '100%'}} src={"../../static/images/bann-small.png"} />   
          </div>  
      </Grid>
    <Grid item xs={12} align="center">
      <Typography component="h3" variant="h3" style={{ padding:"5rem" }}>
        Explore home, explore happiness
      </Typography>
    </Grid>

    <Grid item xs={6} align="center">
      <div className="pot" align="right">
        <img style={{ width: "60%", borderRadius:"5%" }} src={"../../static/images/pottery.webp"} />
      </div>
    </Grid>
    <Grid item xs={0.5} align="right">
    </Grid>
    <Grid item xs={3} align="left">
      <Typography component="h5" variant="h5">
        Ever stayed in a house made up of cow dung? Or danced to the tunes of
        the traditional Indian folk music? Or tried your hands on Warli
        painting? Well, you may have heard of these but not all have
        experienced it An average Urban Indian is also unaware of the joys of
        simple living without the noise, pollution and pace of crowded
        city. Let's take a staycation to explore and learn more about our rural
        heritage.
      </Typography>
      <br></br>
      <div align="center">
      <Button style={{ top: "6rem", fontSize:"2rem"}} color="secondary" variant="contained">
        <a>Explore</a>
      </Button>
      </div>
    </Grid>
   </Grid>
   <div style={{ padding: "7.5rem" }}>
   </div>

    {/* <Grid container spacing={0}>
      <Grid item xs={4} align="center">
        <img src="../../static/images/hp-gall/theyyam.jpeg" style={{ width: "100%", height:"1000px"}} />
      </Grid>
      <Grid item xs={6} align="center">
        <img src="../../static/images/hp-gall/bihured.jpg" style={{ width: "100%", height:"1000px"}} />
      </Grid>
      <Grid item xs={2} align="center">
        <img src="../../static/images/hp-gall/raja.jpg" style={{ width: "100%", height:"1000px"}} />
      </Grid>
    </Grid> */}
   </div> 

  );
}
export default HomePage;
