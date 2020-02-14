import React from 'react';
// import './App.css';

function App() {

  fetch('http://localhost:5000/api/players')
  .then((res => {
    console.log(res)
  }))
  .catch((err) => {
    console.log(err, 'Fetch Error')
  });

  return (
    <div>
        <p>App</p>
    </div>
  );
}

export default App;
