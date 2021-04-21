import React, { useState, useEffect } from 'react';
import './Person.css';
import PersonPin from '@material-ui/icons/PersonPin';
import Box from '@material-ui/core/Box';
import { User } from '../../interfaces';

const SHOW_MESSAGE_TIME = 3000; // milliseconds
const DISTANCE_OPACITY_FACTOR = 600; // the smaller, the less visible is the message!

const getOpacity = (user: User, currentUser: User): number => currentUser.distances &&
    Math.max(0, 1 - currentUser.distances[user.name]/DISTANCE_OPACITY_FACTOR) || 0

const Person = (props: { user: User, currentUser: User }) => {
  const [showMessage, setShowMessage] = useState<boolean>(true);
  useEffect(():void => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, SHOW_MESSAGE_TIME)
  }, [props.user.message]);

  return (
    <Box 
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      className="PersonBox"
      left={`${props.user.position[0]}px`}
      top={`${props.user.position[1]}px`}
    >
      <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <PersonPin fontSize="large" />
        <div>{props.user.name}</div>
      </Box>
      { showMessage && props.user.message.length
          ? <div className="ChatBubble" style={{ opacity: getOpacity(props.user, props.currentUser) }}>{props.user.message}</div>
          : ''
      }
    </Box>
  )
}

export default Person;
