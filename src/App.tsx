import React, {useState, useEffect} from 'react';
import './App.css';

import President from './President';

import TextField from '@material-ui/core/TextField';

function App() {
  const [age, updateAge] = useState('');
  const [birthday, updateBirthday] = useState('2018-10-15');
  const [birthdayDate, updateBirthdayDate] = useState(new Date());
  const [ageDisplay, showAge] = useState(false);
  const [days, setDays] = useState(0);
  let daysMath;

  useEffect(() => {
    let date = new Date(birthday.replace(/-/g, '/'));
    updateBirthdayDate(date);
    // console.log(birthday, date);
  }, [birthday])

  // useEffect(() => {
  //   console.log(parseInt(age));
  // }, [age])

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(parseInt(age) > 0) {
      daysMath = parseInt(age)*365;
    } else {
      daysMath = Date.now() - birthdayDate.getTime();
      daysMath = Math.floor(daysMath / 1000 / 60 / 60 /24)
    }
    setDays(daysMath);
    showAge(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>When can you be president?</h1>
        <h2>Enter your birthday or age to find out!</h2>
        <form noValidate onSubmit={submit}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            value={birthday}
            onChange = {(e) => updateBirthday(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          or
          <TextField
            id="age"
            label="Age"
            type="number"
            value={age}
            onChange={(e) => updateAge(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <button>Find out</button>
        </form>
          {ageDisplay && <President daysOld={days} falsey={!!age}/>}
      </header>
    </div>
  );
}

export default App;
