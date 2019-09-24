import React from 'react';
//import logo from './logo.svg';
import logo from './me-with-gopher.jpg';
import './App.css';
import Project from './Project';
import WorkExp from './WorkExp';
import './Project.css';
import './WorkExp.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p align="center">Hello! I am Milly Mason and Welcome to my online portfolio, currently WIP, but please find my work experience and projects below. Above is a picture of me and a 3D-printed Golang Gopher</p>
        <div className="Project">
        {/* possibly make another component to hold individual blocks of content workexp, proj, etc */}
        <WorkExp name="IBM" startDate="May 2019" endDate="Current" tech="React, Golang, IBM Cloud, JIRA, Postman" 
        descrip="Designed the Quest Deal Workflow web application, full stack developing in React and Golang, to save 
        millions of dollars in sales organization strategies. Also, represented the intern class on the Triangle Women in STEM panel to 
        inspire other young professionals in the field"/>
        <WorkExp name="Ohio State Engineering Education" startDate="Aug 2018" endDate="Current" tech="MATLAB, Excel, SolidWorks" 
        descrip="Conduct and oversee lectures, test lab experiments, apply creative components to improve MATLAB Design Project. Additionally, 
        helped students by holding office hours and grading assignments for the Introduction to Operating Systems Course"/>
        <WorkExp name="TMW Systems" startDate="May 2018" endDate="Dec 2018" tech="VB, C#, .NET, SQL, Angular"
        descrip="Developed and debugged software to increase basic program functionality and started creation of an Angular UI. AS a side project, 
        built a model for an onboarding program to reduce staff turnover and increase inclusion – presented to CEO"/>
        {/* </div>
        <div className="Project"> */}
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
