import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 1 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project</CardTitle>
            <CardText>
              <strong>Technical Environment: HTML4/5, CSS2/3, JavaScript, JQuery, Bootstrap, ReactJS, Redux, BabelJS, JSX, Node.JS, JSON, Web Services, Scrum, JUnit, SVN.</strong>
            </CardText>
            <CardActions border>
              <p>
              •	Involved in development, design and implementation of front end part widget based application.
              •	Developed single page application by using ReactJS backed by Node JS.
              •	Worked extensively on ReactJS, Bootstrap, RESTful Web services, HTML4/5, CSS2/3, JSON etc.
              •	Worked on CSS Pre-processor LESS for developing rich styling web pages.
              •	Used HTML4/5, CSS2/3, ReactJS, Jquery and Bootstrap for the front-end part in developing Single page web applications.
              •	Integrated React with Redux in order to test the application and for fixing bugs.
              •	Designed and implemented reusable components in React.
              </p>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
            </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSXy4Hj4-whSUTVUF8Bc_kaicTYS9Uf1oCkMOzTr-jZyUlLKl) center / cover'}} >Angular Project #1 </CardTitle>
            <CardText>
            <strong> Technical Environment: Angular2, Angular4, Node.JS, MongoDB, HTML5, CSS, JavaScript, TypeScript, Bootstrap, HTTP Service calls, JSON, WebLogic Application Server.</strong>
            </CardText>
            <CardActions border>
              <p>
              •	Understanding business objectives and implementation of business logic.
              •	Involved in various phases like design and development of Software development life cycle (SDLC).
              •	Designed SPA’s using Angular JS Framework.
              •	Used AngularJS as a primary development framework to create Single Page Applications.
              •	Responsible for transforming design mock-ups to W3C standards compliant HTML pages using XHTML, CSS, JavaScript, and JQuery.
              •	Worked on Design, UI, wire-framing, HTML, CSS, JQuery, JSP, accessibility, and optimization.
              •	Translated designs and style guides into functional user interfaces, ensuring cross browser compatibility, performance and robustness.
              </p>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSXy4Hj4-whSUTVUF8Bc_kaicTYS9Uf1oCkMOzTr-jZyUlLKl) center / cover'}} >Angular Project # 2 </CardTitle>
            <CardText>
            <strong>  Technical Environment:  HTML5, CSS, JavaScript, JQuery, JSP, AJAX, Restful services, DOM/CSS Manipulation.</strong>
            </CardText>
            <CardActions border>
              <p>
              •	Understanding business objectives and implementation of business logic.
              •	Involved in various phases like design and development of Software development life cycle (SDLC).
              •	Designed SPA’s using Angular JS Framework.
              •	Used AngularJS as a primary development framework to create Single Page Applications.
              •	Responsible for transforming design mock-ups to W3C standards compliant HTML pages using XHTML, CSS, JavaScript, and JQuery.
              •	Worked on Design, UI, wire-framing, HTML, CSS, JQuery, JSP, accessibility, and optimization.
              •	Translated designs and style guides into functional user interfaces, ensuring cross browser compatibility, performance and robustness.
              •	Worked with full UI control of HTML/CSS, maintaining code and cleanliness.
              </p>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSXy4Hj4-whSUTVUF8Bc_kaicTYS9Uf1oCkMOzTr-jZyUlLKl) center / cover'}} >Angular Project # 3 </CardTitle>
            <CardText>
            <strong>  Technical Environment:  HTML, CSS, JavaScript, JQuery, AngularJS, AJAX, SQL, Notepad++.</strong>
            </CardText>
            <CardActions border>
              <p>
              •	Created paper prototypes, initial wire frames and designed a strategy by collaborating with the designers.
              •	Experienced UI developer, proficient in both mobile and web UI.
              •	Designed Applications using AngularJS Framework.
              •	Designed, developed and tested web pages from the level of paper prototypes to implementation.
              •	Assisted in developing HTML and JavaScript codes for client side presentation and, data validation on the client side with in the forms.
              •	Frameworks such as Bootstrap, Less, and AngularJS were used to develop the applications.
              •	Creative direction of the brand’s visual identity including visual design for the graphics displayed.
              •	Planned, coordinated, and executed all interactions, layout and animations
              </p>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

            </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>

        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;
