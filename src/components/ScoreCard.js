import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import avatarImg from '../assets/avatar1.png';

import './ScoreCard.css';

class ScoreCard extends Component {

  render() {
    return (
        <div>
            <Paper className="scoreCardContainer">
                <Grid container spacing={16}>
                    <Grid item xs={3}>
                        <div>
                            <img className="scoreCardImg" alt="complex" src={avatarImg} />
                        </div>
                    </Grid>
                    <Grid item xs={7} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                                Sarah Edo
                            </Grid>
                            <Grid item xs container>
                                <Grid xs={10} item >
                                    Answered questions
                                </Grid>
                                <Grid xs={2} item>
                                    7
                                </Grid>
                            </Grid>
                            <Grid item xs container>
                                <Grid item xs={10}>
                                    Created questions
                                </Grid>
                                <Grid item xs={2}>
                                    7
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={2} item container direction="column">
                            
                            <Grid item>
                                Score
                            </Grid>
                            <Grid item>
                                10
                            </Grid>
                        </Grid>
                </Grid>
            </Paper>
        </div>
    );
  }
}

export default ScoreCard;
