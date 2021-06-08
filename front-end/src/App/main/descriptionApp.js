import React from 'react';

import { SiInvision, SiGithub, SiGmail } from "react-icons/si";

const descriptionAppTitle = <h1 className="MainPageContainer__VlogTitle">Hello there</h1>;
const descriptionApp = <p className="myInfo">Welcome to my beer application.
My name is Sebastian and I am the creator of an application for recording beers that you have encountered or made and evaluating them, thanks to it you do not have to write them in a notebook.</p>;

const articleFirst = <p className="articleFirst">The application was built based on Javascript and the react framework. On the website I used scss compiler based on BEM "Block Element Modifier".
I used Hooks to build the main state.backend aplikacji został stworzony na framworkach node.js i expres.js</p>;

const contact = 
<section className="contact">
  <div className="contact__unit">
    <a href="https://www.linkedin.com/in/sebastian-antkowiak-932323211/"><SiInvision className="brakeIcon"/>My Linkedin</a>
  </div>
  <div className="contact__unit">
    <a href="https://github.com/Antek97"><SiGithub className="brakeIcon"/>My Github</a>
  </div>
  <div className="contact__unit">
    <p><SiGmail className="brakeIcon"/>seb.antkowiak@gmail.com</p>
  </div>
</section>;

const DescriptionApp =()=> {
  return(
      <>
        <header className="header">
          {descriptionAppTitle}
          {descriptionApp}
        </header>
        <section className="mainImgContainer">
          <img 
            src="https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg" 
            className="mainImg">
          </img>
          </section>
          <footer>
            {articleFirst}
            {contact}
          </footer>
      </>
  )       
}

export default DescriptionApp;