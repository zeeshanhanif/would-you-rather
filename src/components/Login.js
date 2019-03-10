import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';

import './Login.css';

class Login extends Component {

    state = {
        age: '',
        name: 'hai',
        labelWidth: 0,
      };
  render() {
    return (
      <div>
        <div className="long-loginContainer">
            <Paper>
                <div className="loginBoxHeader">
                    <div className="loginBoxTitle">
                        Welcome to the Would you Rather App!
                    </div>
                    <div className="loginBoxMessage">
                        Please sign in to continue
                    </div>
                </div>
                <div className="loginControls">
                    Sign In
                    <form>
                        <FormControl variant="filled" className="formControl">
                            <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
                            <Select
                                value={this.state.age}
                               // onChange={this.handleChange}
                                input={<FilledInput name="age" id="filled-age-simple" />}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </div>
                <Button variant="contained" color="inherit" className="formControl">Sign In</Button>
            </Paper>
        </div>
      </div>
    );
  }
}

export default Login;
