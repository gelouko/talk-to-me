import React, { useState } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import JoinPaper from './components/JoinPaper';


const App = () => {
  const [state, setState] = useState({
    userName: ''
  })

  return (
    <div className="App">
      <Box display="flex" alignItems="center" justifyContent="center" minHeight="600px">
        { state.userName ? 
          (
            <>
              <Box display="relative" className="PeopleBox">
              </Box>

              <Box className="ChatBox" display="flex" justifyContent="space-around" alignItems="center">
                <TextField className="ChatInput" label="Message" fullWidth={true} />
                <Button variant="contained" color="primary">
                  Send
                </Button>
              </Box>
            </>
          )
          : <JoinPaper />
        }
      </Box>
    </div>
  );
}

export default App;
