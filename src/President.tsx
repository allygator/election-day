import React from 'react';
import './App.css';

const President: React.FC<{daysOld: number, falsey: boolean}> = function (props) {
  
  let date = new Date();
  return (
    <div className="App">
      {props.falsey}
      <p>You are {props.daysOld} days old. That is {35 - Math.floor(props.daysOld/365)} years from being old enough to be President!</p>
      <p>You will be eligible for the election following {date.getFullYear()+ (35 - Math.floor(props.daysOld/365))} which is: {date.getFullYear()+ (35 - Math.floor(props.daysOld/365))+(4-(date.getFullYear()+ (35 - Math.floor(props.daysOld/365)))%4)} </p>
    </div>
  );
}

export default President;