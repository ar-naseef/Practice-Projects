import React,{ Component } from 'react';
import { Tracker } from 'meteor/tracker'

import { Players } from './../api/players';

class App extends Component{
  render(){
    Tracker.autorun(function(){
       console.log(Players.find().fetch());
    });
    return(
      <div>

        <h1> Score Kepper App</h1>

      </div>
    );
  }
}

export default App;
