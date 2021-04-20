import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <Box display="relative" className="PeopleBox">
      </Box>

      <Box className="ChatBox" display="flex" justifyContent="space-around" alignItems="center">
        <TextField className="ChatInput" label="Message" fullWidth={true} />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>

    </div>
  );
}

export default App;
