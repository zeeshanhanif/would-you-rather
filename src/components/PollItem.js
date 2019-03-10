import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import avatarImg from '../assets/avatar1.png';

import './PollItem.css';

class PollItem extends Component {

  render() {
    return (
        <div className="pollItemContainer">
            <Paper className="pollItemPaper">
                <div className="pollItemBoxHeader">
                    Tyler McGinnis asks:
                </div>
                <div className="pollItemControls">
                    <Grid container spacing={16}>
                    
                        <Grid item xs={4} alignItems="center" justify="center" container>
                            <div>
                                <img className="scoreCardImg" alt="complex" src={avatarImg} />
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="pollItemSeparator">
                            </div>
                        </Grid>
                        <Grid item xs={7} container direction="column">
                            <Grid item >
                                <div className="pollItemMainTitle">
                                    Would you Rather....
                                </div>
                            </Grid>
                            <Grid item>
                                <div>
                                    ..be front-end dev...
                                </div>
                            </Grid>
                            <Grid item >
                                <Button variant="contained" color="inherit" className="pollItemFormControl" component={Link} to="/question">View Poll</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
  }
}

export default PollItem;
