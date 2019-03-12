import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ScoreCard from "./ScoreCard";
import { connect } from "react-redux";
import { calculateUserScore } from "../utils/helper";

import './LeaderBoard.css';

class LeaderBoard extends Component {

    render() {
        const { userIds } = this.props;
        return (
            <div className="leaderBoardContainer">
                <Grid container spacing={24} direction="column">
                    {
                        userIds.map((id) => (
                            <Grid item xs={12}>
                                <ScoreCard key={id} id={id}></ScoreCard>
                            </Grid>
                        ))
                    }
                    
                </Grid>
            </div>
        );
  }
}

function mapStateToProps({users, questions, authedUser}) {
    return {
        userIds: Object.keys(users)
            .sort((a,b) => calculateUserScore(users[b]) - calculateUserScore(users[a]))
    }
}

export default connect(mapStateToProps,null)(LeaderBoard);
