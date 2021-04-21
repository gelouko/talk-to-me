import React, { useState, ChangeEvent } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { User } from './interfaces';
import JoinPaper from './components/JoinPaper';
import { createSocket } from './utils/sockets';
import Stadium from './components/Stadium';

interface AppState {
  joined: boolean,
  currentMessage: string,
  socket?: WebSocket
}

const App = () => {
  const [appState, setAppState] = useState<AppState>({
    joined: false,
    currentMessage: ''
  });
  const [currentUser, setCurrentUser] = useState<User>({
    name: '',
    message: '',
    position: [0,0]
  })
  const [users, setUsers] = useState<User[]>([]);

  const onJoin = () => {
    setAppState({ 
      ...appState, 
      joined: true, 
      socket: createSocket(currentUser, setUsers)
    });
  }

  const sendMessage = (message: string): void => {
    const event = { action: 'update', currentUser: { ...currentUser, message } };

    appState.socket && appState.socket.send(JSON.stringify(event))
    setCurrentUser({ ...event.currentUser })
    setAppState({ ...appState, currentMessage: '' })
  }

  const setUserPosition = (position: number[]) => {
    const event = { action: 'update', currentUser: { ...currentUser, position } };

    appState.socket && appState.socket.send(JSON.stringify(event))
    setCurrentUser({ ...event.currentUser })
  }

  return (
    <div className="App">
      <Box display="flex" alignItems={appState.joined ? 'stretch' : 'center'} justifyContent="center" minHeight="600px" flexDirection="column">
        { appState.joined ? 
          (
            <>
              <Stadium users={users} currentUser={currentUser} setUserPosition={setUserPosition} />

              <Box className="ChatBox" display="flex" justifyContent="space-around" alignItems="center">
                <TextField 
                  className="ChatInput" 
                  label="Message" 
                  fullWidth={true} 
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => setAppState({ ...appState, currentMessage: e.target.value })}
                  value={appState.currentMessage} 
                />
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={(e: any): void => sendMessage(appState.currentMessage)}
                >
                  Send
                </Button>
              </Box>
            </>
          )
          : <JoinPaper 
              userName={currentUser.name}
              setUserName={(e: ChangeEvent<HTMLTextAreaElement>): void => setCurrentUser({ ...currentUser, name: e.target.value })}
              onJoin={onJoin} 
            />
        }
      </Box>
    </div>
  );
}

export default App;
