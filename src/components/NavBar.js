import React, { Component } from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import LoadingBar from "react-redux-loading";
import avatarImg from '../assets/avatar1.png';
import './NavBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  loggedInUser: {
    marginRight: 12,
  }
};

class NavBar extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired
  }
  render() {
    const { classes } = this.props;
    return (
      <header>
        <AppBar position="static" >
        <Toolbar>  
          <div className={classes.grow}>
            <Button color="inherit"  className="navLinkButton" component={Link} to="/">Home</Button>
            <Button color="inherit" className="navLinkButton" component={Link} to="/newquestion">New Question</Button>
            <Button color="inherit" className="navLinkButton" component={Link} to="/leaderboard">Leader Board</Button>
          </div>  
          <Typography variant="h6" color="inherit" className={classes.loggedInUser}>
            Hello User
          </Typography>
          <Avatar alt="Remy Sharp" src={avatarImg} className={classes.avatar} />      
          <Button color="inherit" className="navLinkButton" component={Link} to="/login">Login</Button>

        </Toolbar>
      </AppBar>
      <LoadingBar />
      </header>
    );
  }
}
export default withStyles(styles)(NavBar);
