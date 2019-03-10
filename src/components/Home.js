import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import TabContainer from './TabContainer';
import Grid from '@material-ui/core/Grid';
import avatarImg from '../assets/avatar1.png';

import './Home.css';

  
class Home extends Component {

    state = {
      value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
            <div className="homeContainer">
                <Paper >
                    <Grid container spacing={16} justify="center" >
                        <Grid item xs={12}>
                            <Tabs value={value} onChange={this.handleChange}  variant="fullWidth">
                                <Tab label="Unanswered Questions" />
                                <Tab label="Answered Questions" />
                            </Tabs>    
                        </Grid>
                        <Grid item xs={12}>
                            {value === 0 && <TabContainer>Item One</TabContainer>}
                            {value === 1 && <TabContainer>Item Two</TabContainer>}   
                        </Grid>
                    </Grid>

                    
                </Paper>
            </div>
        );
    }
}

export default Home;
