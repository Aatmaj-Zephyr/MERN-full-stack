import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
   const myStyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return <h2 style={myStyle}>I am a {props.color} Car on a blue background!</h2>;
}

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React, This is Aatmaj.</h1>
      <Car color="red" />
    </div>
  );
}
