import React, { useState } from 'react';
import './App.scss';

import buisnessPointing from './assets/buisnessPointing.svg';
import buildingSite from './assets/buildingSite.svg';
import webpage from './assets/webpage.svg';
import email from './assets/email.svg';
import github from './assets/github.svg';
import linkedIn from './assets/linkedIn.svg';
import x from './assets/x.svg';
import phone from './assets/phone.svg';
import landingBackground from './assets/Cornered-Stairs.svg';

function App() {

  const [currentPage, setCurrentPage] = useState<string>('landing');

  const companyName = 'Company Name';

  const whatWeDo = {
    title: 'What we do',
    text: [
      'Help you design and build a website for your buisness needs.',
      'Your buisness needs a responsive and beautiful site.',
      'We offer domain registration, and hosting. So that your buisness doesnt have to worry about site upkeep.'
    ]
  }

  const howWeHelp = {
    title: 'How we help you reach more customers',
    text: [
      'Bring your companies website to the front of peoples searches.',
      'SEO to bring you to the front page of google searches (no idea how to do this btw).',
      'We offer analytics so you can monitor user engagement on your site. (this i can do easy).'
    ]
  }

  const helpYourBuisnessGrow = {
    title: 'Help your buisness grow',
    text: [
      'A strong online prescence is important.',
      'We will create you one',
    ]
  }

  interface blurbText {
    title: string
    text: string[]
  }

  const blurb = (textValues: blurbText) => {
    return (
      <div className='blurb'>
        <p className='blurbTitle'>{textValues.title}</p>
        {textValues.text.map((element) =>
          <p className='blurbText'>{element}</p>
        )}

        {textValues.title === 'Help your buisness grow' &&
          <input type='button' value='Request a quote' onClick={() => setCurrentPage('quote')} className='btnReq' />
        }
      </div>
    )
  }

  const footer = () => {

    return (
      <div className='footer'>
        <div className='nameAndDate'>
          <p>{companyName}</p>
          <p>2021</p>
        </div>
        <div className='contact'>
          <p>Contact</p>
          <div className='icons'>
            <img src={email} alt='email icon' />
            <img src={linkedIn} alt='linkedin icon'/>
            <img src={github} alt='github icon'/>
          </div>
        </div>
      </div>
    )

  }

  return (
    <div className="App" >
      {currentPage === 'landing' &&
        <div className="landing" style={{backgroundImage: `url(${landingBackground})`}}>
          <div className="nameHeader">
            <p id='title'>{companyName}</p>
            <p id='subTitle'>Web Development</p>
          </div>
          <div className="subText">
            <p id='idea'>It begins with an idea.</p>
            <p id='middle'>Its not enought to look good, your website needs to drive conversions</p>
            <p id='bottom'> and engage with your audience.</p>
          </div>
          <input type="button" className="normalButton" onClick={() => setCurrentPage('main')} value="Take me inside" />
        </div>
      }

      {currentPage === 'main' &&
        <>
          <div className='header'>
            <div className='headerLeft'>
              <p>{companyName}</p>
            </div>
            <div className='headerRight'>
              <input type='button' value='Request a quote' onClick={() => setCurrentPage('quote')} className='btnReq' />
            </div>
          </div>

          <div className="mainBody">
            <div className='mainleft'>
              {blurb(whatWeDo)}
              <div className='imageBox'>
                <img src={buisnessPointing} alt='main pointing to chart' />
              </div>
              {blurb(helpYourBuisnessGrow)}
            </div>

            <div className='mainRight'>
              <div className='imageBox'>
                <img src={buildingSite} alt='man putting components onto site' />
              </div>
              {blurb(howWeHelp)}
              <div className='imageBox'>
                <img src={webpage} alt='drawing of web page components' />
              </div>
            </div>
          </div>
          {footer()}
        </>
      }
      {currentPage === 'quote' &&
        <>
          <div className='contactTop'>
            <button onClick={() => setCurrentPage('main')}>
              <img src={x} />
            </button>
          </div>

          <div className='contactBody'>
            <p>Contact Us to request a quote:</p>
            <div className="what you needBox">
              <p>Describe what you need</p>
              <input type='textarea' />
              <div className='sendReq'>
                <input type='button' value='Send Request' />
                <p>I will reach out to you shortly</p>
              </div>
            </div>

            <div className='blurb'>
              <p>A redisgn of an old site,</p>
              <p>Or a brand new site.</p>
              <p>We can manage your site after it is launched.</p>
            </div>

            <div className='alternativeContact'>
              <p>You can also reach me at:</p>
              <div className='altBox'>
                <img src={email} alt='email icon'/>
                <p>Email: sampleemail@gmail.com</p>
              </div>
              <div className='altBox'>
                <img src={phone} alt='phone icon'/>
                <p>Phone: 647-588-3123</p>
              </div>
            </div>

          </div>

          {footer()}
        </>
      }

    </div>
  );
}

export default App;
