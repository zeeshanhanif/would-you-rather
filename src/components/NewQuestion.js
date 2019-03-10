import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import TextField from '@material-ui/core/TextField';

import './NewQuestion.css';

class NewQuestion extends Component {

    state = {
        age: '',
        name: '',
        labelWidth: 0,
      };
  render() {
    return (
      <div>
        <div className="long-newQuestionContainer">
            <Paper className="long-newQuestionPaper">
                <div className="newQuestionBoxHeader">
                    Create New Quesiton
                </div>
                <div className="newQuestionControls">
                    <div >
                        Complete the quesiton:
                    </div>
                    <div className="newQuestionText">
                        Would you rather...
                    </div>
                    <form>
                        <TextField
                            id="outlined-name"
                            label="Option One"
                            className="newQuestionFormControl"
                            value={this.state.name}
                            //onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                            />
                        <div className="newQuestionSeparator">
                            OR
                        </div>
                        <TextField
                            id="outlined-name"
                            label="Option Two"
                            className="newQuestionFormControl"
                            value={this.state.name}
                            //onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                            />
                    </form>
                </div>
                <Button variant="contained" color="inherit" className="newQuestionFormControl">Submit</Button>
            </Paper>
        </div>
      </div>
    );
  }
}

export default NewQuestion;
