import React, { KeyboardEvent } from 'react';
import './Stadium.css';
import { User } from '../../interfaces';
import Person from '../Person';

const SPEED = 20;

const keyFunctions: { [key:string]: (position: number[]) => number[]} = {
  ArrowUp: (currentPosition: number[]) => [currentPosition[0], currentPosition[1] - SPEED],
  ArrowDown: (currentPosition: number[]) => [currentPosition[0], currentPosition[1] + SPEED],
  ArrowLeft: (currentPosition: number[]) => [currentPosition[0] - SPEED, currentPosition[1]],
  ArrowRight: (currentPosition: number[]) => [currentPosition[0] + SPEED, currentPosition[1]],
}

const Stadium = (props: { users: User[], currentUser: User, setUserPosition: (position: number[]) => void }) => {
  const moveUser = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (!Object.keys(keyFunctions).includes(e.code)) {
      return
    }
    
    props.setUserPosition(keyFunctions[e.code](props.currentUser.position))
  }
  
  return <div tabIndex={0} className="PeopleBox" onKeyDown={moveUser}>
    {props.users.map((user: User, i: number): JSX.Element => {
      return (<Person key={i} user={user} currentUser={props.currentUser} />)
    })}
  </div>
}

export default Stadium;
