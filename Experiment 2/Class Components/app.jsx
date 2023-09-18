import React from 'react';
class Car extends React.Component {
  render() {
    return <h2>Hi, I am custom component!</h2>;
  }
}

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React, This is Aatmaj.</h1>
      <Car/>
    </div>
  );
}

// Log to console
console.log('Hello console')