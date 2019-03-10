import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import avatarImg from '../assets/avatar1.png';

import './Question.css';

class Question extends Component {

    state = {
        value: 'female',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
    return (
        <div className="questionContainer">
            <Paper className="questionPaper">
                <div className="questionBoxHeader">
                    Tyler McGinnis asks:
                </div>
                <div className="questionControls">
                    <Grid container spacing={16}>
                    
                        <Grid item xs={4} alignItems="center" justify="center" container>
                            <div>
                                <img className="scoreCardImg" alt="complex" src={avatarImg} />
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="questionSeparator">
                            </div>
                        </Grid>
                        <Grid item xs={7} container direction="column">
                            <Grid item>
                                <div className="questionMainTitle">
                                    Would you Rather....
                                </div>
                            </Grid>
                            <Grid item >
                                <div>
                                <RadioGroup
                                    aria-label="Gender"
                                    name="gender1"
                                    //className={classes.group}
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel value="OptionOne" control={<Radio />} label="be a front-end developer" />
                                    <FormControlLabel value="OptionTwo" control={<Radio />} label="be a back-end developer" />
                                </RadioGroup>
                                </div>
                            </Grid>
                            <Grid item >
                                <Button variant="contained" color="inherit" className="questionFormControl"  component={Link} to="/pollresult">Submit</Button>
                            </Grid>
                            
                            
                        </Grid>
                    </Grid>
                </div>
                
            </Paper>
        </div>
    );
  }
}

export default Question;
