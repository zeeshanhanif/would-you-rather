import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import avatarImg from '../assets/avatar1.png';

import './PollResults.css';

class PollResults extends Component {

  render() {
    return (
        <div className="pollResultsContainer">
            <Paper className="pollResultsPaper">
                <div className="pollResultsBoxHeader">
                    Tyler McGinnis asks:
                </div>
                <div className="pollResultsControls">
                    <Grid container spacing={16}>
                    
                        <Grid item xs={3} alignItems="center" justify="center" container>
                            <div>
                                <img className="scoreCardImg" alt="complex" src={avatarImg} />
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="pollResultsSeparator">
                            </div>
                        </Grid>
                        <Grid item xs={8} container direction="column">
                            <Grid item >
                                <div className="pollResultsMainTitle">
                                    Results:
                                </div>
                            </Grid>
                            <Grid item className="pollResultsAnswerGrid">
                                <Paper className="pollResultsAnswerPaper">
                                    <Grid container spacing={16} direction="column">
                                        <Grid item >
                                            Would you rather find $50 yourself?
                                        </Grid>
                                        <Grid item >
                                            <LinearProgress variant="determinate" value={(66.67)} className="pollResultsAnswerProgress" />
                                        </Grid>
                                        <Grid item className="pollResultsVoteCount" >
                                            2 out of 3 votes
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item className="pollResultsAnswerGrid">
                                <Paper className="pollResultsAnswerPaper">
                                    <Grid container spacing={16} direction="column">
                                        <Grid item >
                                            Would you rather have your best friend find $50?
                                        </Grid>
                                        <Grid item >
                                            <LinearProgress variant="determinate" value={(33.33)} className="pollResultsAnswerProgress"/>

                                        </Grid>
                                        <Grid item className="pollResultsVoteCount">
                                            1 out of 3 votes
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
  }
}

export default PollResults;
