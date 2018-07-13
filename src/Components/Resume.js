import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component{
  render(){
    return(
      <div className="resume-grid">
      <Grid>
      <Cell col={4}>
      <div style={{textAlign: 'center'}}>
      <img src="https://media.licdn.com/dms/image/C4D03AQG5xbtiVwKQpQ/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=hYT2jOu3SZzNicgAzoRG8OcsaXgn89pEIWX8gT37gTU"
      alt="avatar"
      style={{height: '200px'}} />
      </div>
      <h2 style={{paddingTop: '2em'}}> Mohammed Ali </h2>
      <h4 style={{color: 'grey'}}> Programmer </h4>
      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      <p>
      7+ years of experience in application and web development with emphasis on HTML/HTML5, CSS/CSS3, JavaScript, JQuery, Bootstrap, Node.JS, TypeScript, Angular 2 and 4, ExpressJS, MongoDB, AJAX, JSON, etc. technologies
      </p>
      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      <h5> Address </h5>
      <p> Schaumberg, IL </p>
      <h5> Phone </h5>
      <p> (609) 337-4005 </p>
      <h5> Email </h5>
      <p> ali.mohammed.ui@gmail.com </p>
      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

      </Cell>
      <Cell className="resume-right-col" col={8}>
      <div className="right-side">
      <h2>Education Details</h2>
      <Education
      startYear={2007}
      endYear={2010}
      schoolName={"Osmania University"}
      courseName="Bachelor's in Computer Science"
      />
      <Education
      startYear={2010}
      endYear={2012}
      schoolName={"Osmania University"}
      courseName="Master's in Business Administration"
      />
      <hr style={{borderTop: '3px solid #e22947'}}/>
      <h2> Relevent Experience </h2>
      <Experience
      startYear={"August 2017"}
      endYear={"July 2018"}
      jobName={"Local Backhaul Networks - Web/UI Developer"}
      jobDescription="Extensive Experience: Currently working with Local Backhaul Networks, writing JavaScript/Jquery code while keeping performance, security and maintainability of the application in mind. Working on Developing SPA’s using Angular2 and Angular4, JavaScript, Bootstrap, Node.JS and various other tools.
                      Responsibilities:
                      •	Participated in user requirement sessions to gather business requirements.
                      •	Involved in complete life cycle of Analysis, Design, Development, Integration, Testing and Deployment of application modules.
                      •	Generated dynamic templates based on conditions and then shooting them up with performance enhancing Angular2, Angular4, HTML5, CSS, JavaScript and Bootstrap.
                      •	Worked within creative, operations, marketing, and development teams AngularJS in an Agile project management setting to administer product life cycle jQuery Bootstrap.
                      •	Designed Frontend with in object oriented JavaScript Framework like Angular2 and Angular4.
                      •	Worked on developing the server side code of the application using Node.JS and ExpressJS to store and retrieve data from MongoDB
                      •	Experience in No-Relational databases like MongoDB and Relational databases like Oracle, Sybase, Crystal Reports and SQL Server.
                      •	Designed No-SQL MongoDB dynamic database schemas for the project.
                      •	Agile methodology was adopted in the development. This includes daily Scrum.
                      •	Used Angular4 as the development framework to build a single-page application.
                      •	Working within frameworks like Bootstrap, Less, Angular4, D3 Charts, Highcharts, Grunt Tasks, automated scripts through Node JS.
                      •	Worked on context-switching between the threads and performed multiple operation.
                      •	Involved in developing the CRUD operations for pulling the data from the Mongo database.
                      •	Performed software installation, upgrades, troubleshooting and maintenance on UNIX servers.
                      •	Implemented logging in the application using Log 4J.
                      •	Involved in Unit integration, bug fixing, acceptance testing with test cases, Code reviews.
                      •	Worked on testing the cross browser compatibility."


        />
        <Experience
        startYear={"Febuary 2017"}
        endYear={"July 2017"}
        jobName={"Papa John’s - Web/UI Developer"}
        jobDescription="Extensive Experience:  At Papa John’s, I collaborated with a team of Front-end developers and worked in developing Single Page Applications using ReactJS, Redux, JSX, JavaScript, Jquery, Bootstrap, ExpressJS, NodeJS and various other tools.

Responsibilities:
•	Involved in development, design and implementation of front end part widget based application.
•	Developed single page application by using ReactJS backed by Node JS.
•	Worked extensively on ReactJS, Bootstrap, RESTful Web services, HTML4/5, CSS2/3, JSON etc.
•	Worked on CSS Pre-processor LESS for developing rich styling web pages.
•	Used HTML4/5, CSS2/3, ReactJS, Jquery and Bootstrap for the front-end part in developing Single page web applications.
•	Integrated React with Redux in order to test the application and for fixing bugs.
•	Designed and implemented reusable components in React.
•	Built reusable and customizable components for the new website using React JS and React-Routes to create a single page web application.
•	Created interactive enterprise surveys utilizing React and its performant virtual DOM.
•	Used React JS to create controllers to handle triggers.
•	Used React JS to create views to hook up models to the DOM.
•	Developed Web Services using RESTFUL services.
•	Worked on NodeJS as a server side implementation.
•	Used AJAX to get the data from the server asynchronously by using JSON object.
•	Performed building and deployment of EAR, WAR, JAR files on test, stage systems in WebLogic Application Server.
•	Performed unit testing using JUNIT framework.
•	Used SVN as a version control system, an important component of Source Configuration Management (SCM).
•	Developed Responsive designs suitable for Mobiles/Tablets/PC/MAC by defining media queries.
•	ReactJS is used to update models with two-way data binding, design executive dashboard, creating reusable service classes and format the data using pipes.
"
  />
  <Experience
  startYear={"October 2014"}
  endYear={"January 2016"}
  jobName={"Aetna - Web/UI Developer"}
  jobDescription="Extensive Experience: At Aetna, I developed user interfaces in the form of a desktop web app, with a focus on performance, reliability, and maintainability. I worked on Developing the Single Page applications using HTML5, CSS, AngularJS, JavaScript, Jquery, Ajax, REST etc.

Web/UI Developer
Technical Environment:  HTML5, CSS, JavaScript, JQuery, JSP, AJAX, Restful services, DOM/CSS Manipulation.

Responsibilities:
•	Understanding business objectives and implementation of business logic.
•	Involved in various phases like design and development of Software development life cycle (SDLC).
•	Designed SPA’s using Angular JS Framework.
•	Used AngularJS as a primary development framework to create Single Page Applications.
•	Responsible for transforming design mock-ups to W3C standards compliant HTML pages using XHTML, CSS, JavaScript, and JQuery.
•	Worked on Design, UI, wire-framing, HTML, CSS, JQuery, JSP, accessibility, and optimization.
•	Translated designs and style guides into functional user interfaces, ensuring cross browser compatibility, performance and robustness.
•	Utilized various JQUERY plugins to build Rich Internet Application (RIA) to make it look more intuitive.
•	Designed wireframes and mockups for new web interface for a network analysis virtual appliance.
•	Worked with full UI control of HTML/CSS, maintaining code and cleanliness.
•	Created some prototype to implement some of the latest features of HTML5 and CSS3.
•	Worked with back end developers to implement AJAX and dynamic HTML functionality in JQuery.
•	Extensively worked with making calls to APIs to fetch the data from the backend as JSON response and parse it on the UI for DOM/CSS Manipulation.
•	Maximized page load by analyzing content and making adjustments to the code (by following optimization standards).
•	Worked closely with QA team to understand the reported defects and fix them.
•	As part of testing, prepared effective Test Scripts for each of the developed functionality.
•	Worked on consuming and producing the web services using Restful web services.
•	Provided support for deployment in Production environment.
"
/>
<Experience
startYear={"October 2014"}
endYear={"January 2016"}
jobName={"Citi Bank - Web/UI Developer"}
jobDescription="Extensive Experience: At Citi Bank, I was involved in developing Single Page (SPA) web application using JavaScript, JQuery, and AngularJS, NodeJS and various other tools.
Environment: HTML, CSS, JavaScript, JQuery, AngularJS, AJAX, SQL, Notepad++.
Responsibilities:
•	Created paper prototypes, initial wire frames and designed a strategy by collaborating with the designers.
•	Experienced UI developer, proficient in both mobile and web UI.
•	Designed Applications using AngularJS Framework.
•	Designed, developed and tested web pages from the level of paper prototypes to implementation.
•	Assisted in developing HTML and JavaScript codes for client side presentation and, data validation on the client side with in the forms.
•	Frameworks such as Bootstrap, Less, and AngularJS were used to develop the applications.
•	Creative direction of the brand’s visual identity including visual design for the graphics displayed.
•	Planned, coordinated, and executed all interactions, layout and animations
•	Experience working on Node.js passport module for authentication.
•	Established the visual guide and refined the visual design using Photoshop
•	Worked on CSS to design the navigation, gradient background and used other style properties to enhance the look of the web page.
•	Developed a modular CSS architecture (using DRY CSS) that significantly reduced the effort necessary to skin the user interface.
•	Produced sketches, comps, redlines, graphic assets, prototypes, design guidelines and style guides.
•	Enterprises user authentication tools in several stages of project.
•	Enterprise User Security and the Oracle Security Architecture was used.
•	Created and performed SQL queries to fetch data from the backend database.
•	Worked on testing the cross browser compatibility.
"/>
<Experience
startYear={"April 2011"}
endYear={"September 2013"}
jobName={"Systel Inc - Jr. UI/Web Developer"}
jobDescription="Extensive Experience: Systel a U.S.-based multinational provider of integrated technology and business services. Here I started working as a Web developer and used various technologies such as HTML, CSS, Jquery, Bootstrap and Javascript.

Technical Environment: HTML, CSS, JQuery, Bootstrap, AngularJS JavaScript, JSON, Restful services, Log4j, Junit, BitBucket.

Responsibilities:
•	Worked on gathering requirement, creating design, designing database tables, developing code and unit testing.
•	Involved in the development of Presentation layer using HTML, CSS, JQuery, Bootstrap and used AngularJS.
•	Designed and developed the UI in JQuery, HTML, CSS and JavaScript.
•	Used AngularJS as a Development Framework to create Single Page Applications.
•	Worked on rendering the JSON in the UI.
•	Developed Components and classes to make changes to the View.
•	Used DOM parser for accessing objects in jQuery.
•	Developed Web Services using RESTFUL service model.
•	Developed Animations and graphics using jQuery.
•	Actively involved in Scrum's and Sprints of Agile Methodology.
•	Created collections and designed dynamic schemas in database and wrote queries to retrieve the data in SQL.
•	Used BitBucket as version control system to commit and update the data.
"/>
  <hr style={{borderTop: '3px solid #e22947'}}/>
      </div>
      </Cell>
      </Grid>
      </div>
    )
  }
}


export default Resume
