import React, { useState, useEffect } from 'react';
import './Person.css';
import PersonPin from '@material-ui/icons/PersonPin';
import Box from '@material-ui/core/Box';

const SHOW_MESSAGE_TIME = 3000; // milliseconds

const Person = (props: { name: string, message: string, position: number[] }) => {
  const [showMessage, setShowMessage] = useState<boolean>(true);
  useEffect(():void => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, SHOW_MESSAGE_TIME)
  }, [props.message]);

  return (
    <Box 
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      className="PersonBox"
      left={`${props.position[0]}px`}
      top={`${props.position[1]}px`}
    >
      <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <PersonPin fontSize="large" />
        <div>{props.name}</div>
      </Box>
      { showMessage && props.message.length
          ? <div className="ChatBubble">{props.message}</div>
          : ''
      }
    </Box>
  )
}

export default Person;
