import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import MealDetails from './Components/Meals/MealDetails';
import AddMeal from './Components/Meals/AddMeal';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import 'firebase/database';
import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
       <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/meal/:id' component={MealDetails} />
          <Route path='/addmeal' component={AddMeal} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
       </div>
     </BrowserRouter>
    );
  }
}

export default App;
