import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { calculateUserScore } from "../utils/helper";
import { connect } from "react-redux";

import './ScoreCard.css';

class ScoreCard extends Component {

    render() {
        const { user } = this.props;
        
        return (
            <div>
                <Paper className="scoreCardContainer">
                    <Grid container spacing={16}>
                        <Grid item xs={3}>
                            <div>
                                <img className="scoreCardImg" alt="complex" src={user.avatarURL} />
                            </div>
                        </Grid>
                        <Grid item xs={7} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    {user.name}
                                </Grid>
                                <Grid item xs container>
                                    <Grid xs={10} item >
                                        Answered questions
                                    </Grid>
                                    <Grid xs={2} item>
                                        {Object.keys(user.answers).length}
                                    </Grid>
                                </Grid>
                                <Grid item xs container>
                                    <Grid item xs={10}>
                                        Created questions
                                    </Grid>
                                    <Grid item xs={2}>
                                        {user.questions.length}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={2} item container direction="column">
                                
                                <Grid item>
                                    Score
                                </Grid>
                                <Grid item>
                                    {calculateUserScore(user)}
                                </Grid>
                            </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps({authedUser, questions, users}, { id }) {
    return {
        authedUser,
        user: users[id],
    }
}

export default connect(mapStateToProps)(ScoreCard);
