import React from 'react';
import ReactDOM from 'react-dom/client';


function Car(props) {
  return <h2 style={{color:props.color}}>I am a {props.color} Car!</h2>;
}


export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React, This is Aatmaj.</h1>
      <Car color="red" />
    </div>
  );
}

// Log to console
console.log('Hello console')