import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TogetherMain from "./main/TogetherMain";
import Mission from './main/mission/MissionMain';
import Calendar from './main/calendar/CalendarMain';
import Gallery from './main/gallery/GalleryMain';
import Group from './main/group/GroupMain';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={TogetherMain} />
          <Route path='/mission' component={Mission}/>
          <Route path='/calendar' component={Calendar}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/group' component={Group}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;