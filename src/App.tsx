import React, { useState, ChangeEvent } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import JoinPaper from './components/JoinPaper';

interface User {
  name: string,
  joined: boolean,
  position: number[]
}

const App = () => {
  const [user, setUser] = useState<User>({
    name: '',
    joined: false,
    position: [0,0]
  });

  const onJoin = () => {
    setUser({ ...user, joined: true });
  }

  return (
    <div className="App">
      <Box display="flex" alignItems={user.joined ? 'stretch' : 'center'} justifyContent="center" minHeight="600px" flexDirection="column">
        { user.joined ? 
          (
            <>
              <Box className="PeopleBox">
                test
              </Box>

              <Box className="ChatBox" display="flex" justifyContent="space-around" alignItems="center">
                <TextField className="ChatInput" label="Message" fullWidth={true} />
                <Button variant="contained" color="primary">
                  Send
                </Button>
              </Box>
            </>
          )
          : <JoinPaper 
              userName={user.name}
              setUserName={(e: ChangeEvent<HTMLTextAreaElement>): void => setUser({ ...user, name: e.target.value })}
              onJoin={onJoin} 
            />
        }
      </Box>
    </div>
  );
}

export default App;
