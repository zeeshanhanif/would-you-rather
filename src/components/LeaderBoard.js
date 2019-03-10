import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ScoreCard from "./ScoreCard";

import './LeaderBoard.css';

class LeaderBoard extends Component {

  render() {
    return (
        <div className="leaderBoardContainer">
            <Grid container spacing={24} direction="column">
                <Grid item xs={12}>
                   <ScoreCard></ScoreCard>
                </Grid>
                <Grid item xs={12}>
                <ScoreCard></ScoreCard>
                </Grid>
                <Grid item xs={12}>
                <ScoreCard></ScoreCard>
                </Grid>
            </Grid>
        </div>
    );
  }
}

export default LeaderBoard;
