import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FirstPage from './firstPage/logoutPage/LogoutPage';
import Login from './firstPage/login/Login';
import Register from './firstPage/register/Register';

import TogetherMain from "./main/TogetherMain";
import Mission from './main/mission/MissionMain';
import Calendar from './main/calendar/CalendarMain';
import Gallery from './main/gallery/GalleryMain';
import Test from "./main/gallery/ImgUploadTest";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={FirstPage}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>

          <Route path="/main" component={TogetherMain} />
          <Route path='/mission' component={Mission} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/gallery' component={Gallery} />

          <Route path='/test' component={Test}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;