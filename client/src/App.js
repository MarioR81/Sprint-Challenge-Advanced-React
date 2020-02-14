import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Random from './Random';
// import './App.css';

class App extends React.Component {

  state ={
    players: []
  }

  componentDidMount(){ 
  // useEffect(() => {
  axios
  .get('http://localhost:5000/api/players')
  .then((res => {
    console.log('fetch', res.data)
    this.setState({
      players: res.data
    })
  }))
  .catch((err) => {
    console.log(err, 'Fetch Error')
  });
// }, []);

}

render() { 
  return (
    <div>
        <p>App</p>

        <Random />

        {this.state.players.map((player, key) => (
          <Card player={player} key={key}/>
        ))}
    </div>
  );

}
}

export default App;
