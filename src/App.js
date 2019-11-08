import React, { Component } from 'react';
import List from './list';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      
      items:[]
    };
  }
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }
  onSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      term:'',
      items:[...this.state.items, this.state.term]
    });
  }
  render() {
    return (
      <div className="container-fluid">
      <h1 className="header">List of Doggos</h1>  
        <form className="App input-group mb-3" onSubmit={this.onSubmit}>
          <input className="form-control" value={this.state.term} onChange={this.onChange} />
          <div className="input-group-append">
          <button className="btn btn-primary">Submit</button>
          </div>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
