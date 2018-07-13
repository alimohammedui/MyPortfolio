import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landingpage extends Component{
  render(){
    return(
      <div style={{width:'100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src="https://media.licdn.com/dms/image/C4D03AQG5xbtiVwKQpQ/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=hYT2jOu3SZzNicgAzoRG8OcsaXgn89pEIWX8gT37gTU" alt="My-pic" className="mypic"/>
          <div className="banner-text">
            <h3> <strong>Full Stack Web Developer </strong></h3>

            <hr/>

            <p> <strong> HTML5/CSS3 | JavaScript | JQuery | Bootstrap | Node | React | Angular </strong> </p>
            <div className="social-links">


            <a href="www.google.com" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>


            <a href="www.google.com" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
            </a>


            <a href="www.google.com" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a>


            <a href="www.google.com" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>
            </div>
          </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Landingpage
