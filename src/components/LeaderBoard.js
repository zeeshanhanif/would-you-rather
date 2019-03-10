import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
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
