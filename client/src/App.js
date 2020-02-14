import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Form from './components/Form';
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
        <h1>Signup to our Email Newsletter!</h1>
        <Form />
        

        {this.state.players.map((player, key) => (
          <Card player={player} key={key}/>
        ))}
    </div>
  );

}
}

export default App;
