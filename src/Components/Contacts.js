import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contacts extends Component{
  render(){
    return(
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}>
      <h2> Mohammed Ali </h2>
      <img src="https://media.licdn.com/dms/image/C4D03AQG5xbtiVwKQpQ/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=hYT2jOu3SZzNicgAzoRG8OcsaXgn89pEIWX8gT37gTU"
      alt="my-pic"
      style={{height: '250px' }}/>
      <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
      7+ years of experience in application and web development with emphasis on HTML/HTML5, CSS/CSS3, JavaScript, JQuery, Bootstrap, Node.JS, TypeScript, Angular 2 and 4, ExpressJS, MongoDB, AJAX, JSON, etc. technologies.
      </p>
      </Cell>
      <Cell col={6}>
      <h2> Contact Me </h2>
      <hr/>

    <div className="contact-list">
      <List>
        <ListItem>
          <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
            <i className="fa fa-phone-square" aria-hidden="true"/>
            <u>(609) 337-4005 </u>
          </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
          <i className="fa fa-fax" aria-hidden="true"/>
          <u>(609) 337-4005</u>
        </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
          <i className="fa fa-envelope" aria-hidden="true"/>
          <a href ="https://gmail.com" target="_blank" rel="noopener noreferrer"> <u>ali.mohammed.ui@gmail.com </u> </a>
        </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
          <i className="fa fa-skype" aria-hidden="true"/>
          <u>ali.mohammed.ui</u>
        </ListItemContent>
        </ListItem>
      </List>
      </div>
      </Cell>
      </Grid>

      </div>
    )
  }
}

export default Contacts
