import React from 'react';
import './JoinPaper.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const JoinPaper = ({ }) => {
  return (
    <Paper className="JoinPaper" elevation={3}>
      <TextField className="NameInput" label="Input your name"/>
      <Button variant="contained" color="primary">Join</Button>
    </Paper>
  )
}

export default JoinPaper;
