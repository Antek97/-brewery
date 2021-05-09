import React from 'react';

import { SiInvision, SiGithub, SiGmail } from "react-icons/si";

import Slider from './slider';

const descriptionAppTitle = <h1 className="MainPageContainer__VlogTitle">Hello there</h1>;
const descriptionApp = <p className="myInfo">Welcome to my beer application.
My name is Sebastian and I am the creator of an application for recording beers that you have encountered or made and evaluating them, thanks to it you do not have to write them in a notebook.</p>;

const articleFirst = <p className="articleFirst">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>;

const contact = 
<div className="contact">
  <div className="contact__unit">
    <a href="https://www.linkedin.com/in/sebastian-antkowiak-932323211/"><SiInvision/>  My Linkedin</a>
  </div>
  <div className="contact__unit">
    <a href="https://github.com/Antek97"><SiGithub/>  My Github</a>
  </div>
  <div className="contact__unit">
    <p><SiGmail/> seb.antkowiak@gmail.com</p>
  </div>
</div>
;

const DescriptionApp =()=> {
  return(
      <>
        <div className="header">
          {descriptionAppTitle}
          {descriptionApp}
        </div>
          <Slider/>
          {articleFirst}
          {contact}
      </>
  )       
}

export default DescriptionApp;