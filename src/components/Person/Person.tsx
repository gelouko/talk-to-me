import React, { useState, useEffect } from 'react';
import './Person.css';
import PersonPin from '@material-ui/icons/PersonPin';
import Box from '@material-ui/core/Box';

const SHOW_MESSAGE_TIME = 3000; // milliseconds

const Person = (props: { name: string, message: string }) => {
  const [showMessage, setShowMessage] = useState<boolean>(true);
  useEffect(():void => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000)
  }, [props.message]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      { showMessage && props.message.length
          ? <div className="ChatBubble">{props.message}</div>
          : ''
      }
      <PersonPin fontSize="large" />
      <div>{props.name}</div>
    </Box>
  )
}

export default Person;
