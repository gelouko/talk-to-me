import React, { KeyboardEvent } from 'react';
import './Stadium.css';
import { User } from '../../interfaces';
import Person from '../Person';

const Stadium = (props: { users: User[] }) => {
  const moveUser = (e: KeyboardEvent<HTMLDivElement>): void => {
    console.log('here!!!')
  }
  
  return <div tabIndex={0} className="PeopleBox" onKeyDown={moveUser}>
    {props.users.map((user: User, i: number): JSX.Element => {
      return (<Person key={i} name={user.name} message={user.message} />)
    })}
  </div>
}

export default Stadium;
