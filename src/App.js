import React from 'react'
import './App.css';
import DisplayEmployee from './components/DisplayEmployees';
import axios from 'axios'




class App extends React.Component {
  
  state = {
    character: this.getQuote, 
    
  }
  
  getQuote(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(res => res.data)
    .then(data => {
      this.setState({
        character: data[0],
      });
    });
  }
  
  render(){
    this.getQuote = this.getQuote.bind(this);
    
  return (
    <div className="App">
      
          <DisplayEmployee guy={this.state.character} />
          <button type="button" onClick={this.getQuote}>Get another one</button>
        
      
    </div>
  );
}}

export default App;
