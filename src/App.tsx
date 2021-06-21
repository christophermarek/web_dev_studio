import React, { useState } from 'react';
import './App.css';

function App() {

  const [currentPage, setCurrentPage] = useState<string>('landing');
  let companyName = 'Company Name';

  let whatWeDo = {
    title: 'What we do',
    text: [
      'Help you design and build a website for your buisness needs.',
      'Your buisness needs a responsive and beautiful site.',
      'We offer domain registration, and hosting. So that your buisness doesnt have to worry about site upkeep.'
    ]
  }

  let howWeHelp = {
    title: 'How we help you reach more customers',
    text: [
      'Bring your companies website to the front of peoples searches.',
      'SEO to bring you to the front page of google searches (no idea how to do this btw).',
      'We offer analytics so you can monitor user engagement on your site. (this i can do easy).'
    ]
  }

  let helpYourBuisnessGrow = {
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
          <input type='button' value='Request a quote' className='btnReq' />
        }
      </div>
    )
  }

  return (
    <div className="App">
      {currentPage === 'landing' &&
        <div className="landing">
          <div className="nameHeader">
            <p>{companyName}</p>
            <p>Web Development</p>
          </div>
          <div className="subText">
            <p>It begins with an idea.</p>
            <p>Its not enought to look good, your website needs to drive conversions and engage with your audience.</p>
          </div>
          <input type="button" className="normalButton" onClick={() => setCurrentPage('main')} value="Take me inside" />
        </div>
      }

      {currentPage === 'main' &&
        <>
          <p>Main Page</p>
          <div className='header'>
            <div className='headerLeft'>
              <p>{companyName}</p>
            </div>
            <div className='headerRight'>
              <input type='button' value='Request a quote' className='btnReq' />
            </div>
          </div>

          <div className="mainBody">
            <div className='mainleft'>
              {blurb(whatWeDo)}

              <div className='imageBox'>
                <img src="" />
              </div>

              {blurb(howWeHelp)}
            </div>

            <div className='mainRight'>
              <div className='imageBox'>
                <img src="" />
              </div>
              {blurb(helpYourBuisnessGrow)}
              <div className='imageBox'>
                <img src="" />
              </div>
            </div>
          </div>

          <div className='footer'>
            <div className='nameAndDate'>
              <p>{companyName}</p>
              <p>2021</p>
            </div>
            <div className='contact'>
              <p>Contact</p>
              <div className='icons'>
                <img src="" />
                <img src="" />
                <img src="" />
              </div>
            </div>
          </div>
        </>
      }


    </div>
  );
}

export default App;
