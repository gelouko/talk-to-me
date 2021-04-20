import React, { ChangeEvent } from 'react';
import './JoinPaper.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const JoinPaper = (props: { userName: string, setUserName: (name: ChangeEvent<HTMLTextAreaElement>) => void, onJoin: () => void }) => {
  return (
    <Paper className="JoinPaper" elevation={3}>
      <TextField className="NameInput" label="Input your name" value={props.userName} onChange={props.setUserName} />
      <Button variant="contained" color="primary" onClick={() => props.onJoin()}>Join</Button>
    </Paper>
  )
}

export default JoinPaper;
