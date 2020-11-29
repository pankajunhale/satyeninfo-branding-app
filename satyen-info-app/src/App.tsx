import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Home from './view/Component/Home/Home';
import Inquiry from './view/Component/Inquiry/Inquiry';
import Footer from './view/Footer/Footer';
import Header from './view/Header/Header';
function App() {
  return (
    <Router>
      <Header></Header>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/inquiry" component={Inquiry} />
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}
export default App;
