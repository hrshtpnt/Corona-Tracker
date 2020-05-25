import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import classnames from "classname";
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (confirmed === undefined) {
    return <p>Loading ...</p>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justfy="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={classnames(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp 
              start={0}
              end={confirmed.value}
              separator=','
              duration={2}
              />
            </Typography>
            <Typography variant="h6" component="h2">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={classnames(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
            <CountUp 
              start={0}
              end={recovered.value}
              separator=','
              duration={2}
              />
            </Typography>
            <Typography variant="h6" component="h2">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={classnames(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
            <CountUp 
              start={0}
              end={deaths.value}
              separator=','
              duration={2}
              />
            </Typography>
            <Typography variant="h6" component="h2">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
