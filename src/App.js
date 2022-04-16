import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Event from './MainPages/Event';
import Blog from './MainPages/Blog';
import Gallery from './MainPages/Gallery';
import Home from './MainPages/Home';
import MainAbout from './MainPages/MainAbout';
import SignIn from './MainPages/SignIn';


import OurMission from './AboutUs/OurMission';
import OurVision from './AboutUs/OurVision';
import CoreValue from './AboutUs/CoreValue';
import Bio from './AboutUs/Bio';

import Contact from './ContactUs/Contact';
import Partners from './ContactUs/Partners';
import Sponsorships from './ContactUs/Sponsorships';
import Support from './ContactUs/Support';

import ThankYou from './Components/ThankYou';

import CYCLOPLOGGING from './Cards/CYCLOPLOGGING';
import CYCLOENDURO from './Cards/CYCLOENDURO';
import CYCLOFIRECHAT from './Cards/CYCLOFIRECHAT';
import CYCLOTOURING from './Cards/CYCLOTOURING';
import SignUp from './MainPages/SignUp';
// import FormSignup from './Components/FormSignup';
import ErrorPage from './MainPages/ErrorPage';
import Gallery1 from './DemoGallery/Gallery1';
import Gallery2 from './DemoGallery/Gallery2';
import Gallery3 from './DemoGallery/Gallery3';
import Gallery4 from './DemoGallery/Gallery4';

import OngoingEvent from './Event/OngoingEvent';
import PreviousEvent from './Event/PreviousEvent';
import UpcomingEvent from './Event/UpcomingEvent';
import Event1 from './Event/Event1';
import WeeklyBoard from './Event/WeeklyBoard';
import Profile from './MainPages/Profile';
import ForgotPage from './Components/ForgotPage';
import ConnectStrava from './Components/ConnectStrava';
import Navbar from './Components/Navbar';
import Event2 from './Event/Event2';
import NewReg from './MainPages/new'
import Navbar2 from './Components/Navbar2';


function App() {

  const [statusNo, setStatusNo] = useState('');
  // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const values = async () => {
    const res = await fetch("http://f4af-202-8-112-185.ngrok.io/account/login")

    // console.log(res)
    setStatusNo(res.status);
  }
  // console.log(statusNo)

  useEffect(() => {
    values()
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {statusNo === 200 ? <Navbar2 /> : <Navbar />}
            <Home />
          </Route>
          <Route exact path="/event">
            {statusNo === 200 ? <Navbar2 /> : <Navbar />}
            <Event />
          </Route>
          <Route exact path="/blog">
            {statusNo === 200 ? <Navbar2 /> : <Navbar />}
            <Blog />
          </Route>
          <Route exact path="/mainabout">
            {statusNo === 200 ? <Navbar2 /> : <Navbar />}
            <MainAbout />
          </Route>
          <Route exact path="/gallery">
            {statusNo === 200 ? <Navbar2 /> : <Navbar />}
            <Gallery />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/new">
            <NewReg />
          </Route>
          <Route exact path="/forgot">
            <ForgotPage />
          </Route>
          <Route exact path="/strava">
            {statusNo === 200 ? <Navbar2 /> : <Navbar />}
            <ConnectStrava />
          </Route>
          <Route exact path="/profile">
            {statusNo === 200 ? <Navbar2 /> : <Navbar />}
            <Profile />
            {/* <ConnectStrava /> */}
          </Route>


          <Route exact path="/OurMission">
            <OurMission />
          </Route>
          <Route exact path="/OurVision">
            <OurVision />
          </Route>
          <Route exact path="/CoreValues">
            <CoreValue />
          </Route>
          <Route exact path="/Bio">
            <Bio />
          </Route>

          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Partners">
            <Partners />
          </Route>
          <Route exact path="/Sponsorships">
            <Sponsorships />
          </Route>
          <Route exact path="/Support">
            <Support />
          </Route>

          <Route exact path="/thankyou">
            <ThankYou />
          </Route>


          <Route exact path="/Cycloplogging">
            <CYCLOPLOGGING />
          </Route>
          <Route exact path="/Cycloenduro">
            <CYCLOENDURO />
          </Route>
          <Route exact path="/Cyclofirechat">
            <CYCLOFIRECHAT />
          </Route>
          <Route exact path="/Cyclotouring">
            <CYCLOTOURING />
          </Route>

          {/* Gallery  */}

          <Route exact path="/gallery1">
            <Gallery1 />
          </Route>
          <Route exact path="/gallery2">
            <Gallery2 />
          </Route>
          <Route exact path="/gallery3">
            <Gallery3 />
          </Route>
          <Route exact path="/gallery4">
            <Gallery4 />
          </Route>

          <Route exact path="/currentevent">
            <OngoingEvent />
          </Route>
          <Route exact path="/previousevent">
            <PreviousEvent />
          </Route>
          <Route exact path="/upcomingevent">
            <UpcomingEvent />
          </Route>
          <Route exact path="/event1">
            <Event1 />
          </Route>
          <Route exact path="/event2">
            <Event2 />
          </Route>

          <Route exact path="/weeklyboard">
            <WeeklyBoard />
          </Route>


          {/*  */}

          <Route path="*">
            <ErrorPage />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;

