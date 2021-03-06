import { User } from "../interfaces";

const WS_SERVER_URL = process.env.WS_SERVER_URL || 'ws://localhost:9000';

const createSocket = (currentUser: User, setCurrentUser: (state: any) => void, setUsers: (state: any) => void):WebSocket => {
  const socket = new WebSocket(WS_SERVER_URL);

  socket.addEventListener('open', (e: Event):void => {
    console.log('Received open!', e);
    socket.send(JSON.stringify({ action: 'open', currentUser }));
  });

  socket.addEventListener('message', (e: MessageEvent):void => {
    const users: User[] = JSON.parse(e.data);

    setCurrentUser(users.filter((user: User) => user.name === currentUser.name)[0]);
    setUsers(users)
  });

  socket.addEventListener('close', (e: Event):void => {
    console.log('Received close!', e);
    socket.send(JSON.stringify(currentUser));
  });

  return socket;
}

export { createSocket }
