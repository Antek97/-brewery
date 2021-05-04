import React from 'react';
import { SiInvision, SiGithub, SiGmail } from "react-icons/si";
import Slider from './slider';

const descriptionAppTitle = <h1 className="MainPageContainer__VlogTitle">Hello there</h1>;
const descriptionApp = <p>Welcome to my beer application.
My name is Sebastian and I am the creator of an application for recording beers that you have encountered or made and evaluating them, thanks to it you do not have to write them in a notebook.</p>;

const contact = 
<div>
  <div>
    <SiInvision/><a href="https://www.linkedin.com/in/sebastian-antkowiak-932323211/">My Linkedin</a>
  </div>
  <div>
    <SiGithub/><a href="https://github.com/Antek97">My Github</a>
  </div>
  <div>
    <SiGmail/><p>seb.antkowiak@gmail.com</p>
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
        <div className="contact">
          {contact}
        </div>
      </>
  )       
}

export default DescriptionApp;