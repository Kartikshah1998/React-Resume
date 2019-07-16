import React, {Component} from 'react';
import Create from './Create';
import Simple from './templates/Simple';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      cv: {
        "fname": "Kartik Shah",
        "jobTitle": "App Developer",
        "phone": "0869409152",
        "email": "kartikshah832@gmail.com",
          "profile": "A self taught, full-stack JavaScript developer with a passion for creating awsom" +
            "eness.   I’m an absolute geek and love building and design systems and products.",
        "workEx": [
 {
            "company":"Bitmanity Pvt.Ltd",
            "jobTitle": "UI Designer",
            "from": "2018-08-18",
            "to": "2018-09-1",
            "description": "Developing Frontend for different projects !!!!"
          }
        ],
        "keySkill": [
 
        ],
        "edu": [ {
            "institute": "Ucoe",
            "from": "2010-07-19",
            "to": "2017-11-25",
            "description": "BE Computer Science"
          }
        ]
      }
    }

  }
componentWillMount(){
  localStorage.setItem('cv',JSON.stringify(this.state.cv)); 
}
  render() {
    return (
      <div className="App">
      <div className="text-center"> <img src={logo} className="logo App-logo"/> </div>
        <Switch>
          <Route path='/Create' component={Create}/>
          <Route
          exact
            path='/simple'
            component={(p) =>< Simple {...p} cv = {
            this.state.cv
          } />}/>
          <Route
          path='/simple/:action'
          component={(p) =>< Simple {...p} cv = {
          this.state.cv
        } />}/>
          <Route path='/' component={(p)=><Create {...p} dcv={this.state.cv}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
