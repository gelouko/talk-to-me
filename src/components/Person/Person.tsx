import React from 'react';
import './Person.css';
import PersonPin from '@material-ui/icons/PersonPin';
import Box from '@material-ui/core/Box';

const Person = (props: { name: string, message: string }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <div className="ChatBubble">{props.message}</div>
      <PersonPin fontSize="large" />
      <div>{props.name}</div>
    </Box>
  )
}

export default Person;
