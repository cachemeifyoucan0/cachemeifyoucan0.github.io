import React from 'react';
//import logo from './logo.svg';
import logo from './me-with-gopher.jpg';
import './App.css';
import Project from './Project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello! I am Milly Mason and Welcome to my online porfolio, currently WIP, but please find my work experience and projects below</p>
        <div className="WorkExp">
        
        </div>
        <div className="Project">
        <Project name="RecycleBot" date="August 2019" tech="Node.js" link="https://github.ibm.com/Boston-Cartwright/can-i-recycle-it"/>
        <Project name="Ohio State Fundamentals of Engineering Honors Robotics" date="Jan 2018" tech="C++" link="https://www.youtube.com/watch?v=_MAfoJm-lHw"/>
        <Project name="'Bouncing Orbs' App" date="Aug 2016" tech="Swift" link="http://itunes.apple.com/us/app/bouncing-orbs/id1140320788?mt=8"/>
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
