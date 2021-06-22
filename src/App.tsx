import React, { useState } from 'react';
import './App.scss';
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'react-responsive'
import buisnessPointing from './assets/buisnessPointing.svg';
import buildingSite from './assets/buildingSite.svg';
import webpage from './assets/webpage.svg';
import email from './assets/email.svg';
import github from './assets/github.svg';
import linkedIn from './assets/linkedIn.svg';
import x from './assets/iconmonstr-arrow-64.svg';
import phone from './assets/phone.svg';
import landingBackground from './assets/Cornered-Stairs.svg';

function App() {

  const [currentPage, setCurrentPage] = useState<string>('landing');

  const companyName = 'Company Name';

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

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
          <motion.button onClick={() => setCurrentPage('quote')} className='btnReq' whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Request a quote
          </motion.button>
        }
      </div>
    )
  }

  const footer = () => {

    return (
      <div className='footer'>
        <div className='nameAndDate'>
          <p id='title'>{companyName}</p>
          <p id='date'>2021</p>
        </div>
        <div className='contact'>
          <p className='noBottomMargin'>Contact</p>
          <div className='icons'>
            <AnimatePresence>
              <motion.img src={email} alt='email icon' className='icon' whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} />
              <motion.img src={linkedIn} alt='linkedin icon' className='icon' whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} />
              <motion.img src={github} alt='github icon' className='icon' whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    )

  }

  return (
    <div className="App" >
      <AnimatePresence>

        {currentPage === 'landing' &&
          <motion.div className="landing" style={{ backgroundImage: `url(${landingBackground})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              zIndex: 0,
              y: -1000,
              transition: {
                duration: 0.5
              }
            }}
          >
            <div className="nameHeader">
              <p id='title'>{companyName}</p>
              <p id='subTitle'>Web Development</p>
            </div>
            <div className="subText">
              <p id='idea'>It begins with an idea.</p>
              <p id='middle'>Its not enought to look good, your website needs to drive conversions</p>
              <p id='bottom'> and engage with your audience.</p>
            </div>
            <motion.button className="normalButton" onClick={() => setCurrentPage('main')} whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              Take me inside
            </motion.button>
          </motion.div>
        }
      </AnimatePresence>

      <AnimatePresence>
        {currentPage === 'main' &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='header'>
              <div className='headerLeft'>
                <p>{companyName}</p>
              </div>
              {!isPortrait &&
                <div className='headerRight'>
                  <motion.button onClick={() => setCurrentPage('quote')} className='btnReq header' whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    Request a quote
                  </motion.button>
                </div>
              }
            </div>

            <div className="mainBody">
              {isPortrait ?
                (
                  <>
                    {blurb(whatWeDo)}
                    <div className='imageBox'>
                      <img src={buildingSite} alt='man putting components onto site' />
                    </div>
                    {blurb(howWeHelp)}
                    <div className='imageBox topMargin'>
                      <img src={webpage} alt='drawing of web page components' />
                    </div>
                    {blurb(helpYourBuisnessGrow)}
                  </>
                )
                :
                (
                  <>
                    <div className='mainLeft'>
                      {blurb(whatWeDo)}
                      <div className='imageBox topMargin'>
                        <img src={buisnessPointing} alt='main pointing to chart' />
                      </div>
                      {blurb(helpYourBuisnessGrow)}
                    </div>

                    <div className='mainRight'>
                      <div className='imageBox'>
                        <img src={buildingSite} alt='man putting components onto site' />
                      </div>
                      {blurb(howWeHelp)}
                      <div className='imageBox topMargin'>
                        <img src={webpage} alt='drawing of web page components' />
                      </div>
                    </div>
                  </>
                )}
            </div>
            {footer()}
          </motion.div>
        }
      </AnimatePresence>
      {currentPage === 'quote' &&
        <>
          <div className='contactTop'>
            <button onClick={() => setCurrentPage('main')}>
              <AnimatePresence>
                <motion.img src={x} alt='back button icon' whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }} />
              </AnimatePresence>
            </button>
          </div>

          <div className='contactBody'>
            <div className='group'>
              <p id='largeText'>Contact us to request a quote:</p>
              {isPortrait ?
                (
                  <>
                    <div className='blurb'>
                      <p>A redesign of an old site,</p>
                      <p>Or a brand new site.</p>
                      <p>We can manage your site after it is launched.</p>
                    </div>

                    <div className="whatNeedBox">
                      <p id='describe'>Describe what you need</p>
                      <div contentEditable={true} className='contactUsInput'> </div>
                      <div className='sendReq'>
                        <motion.button className='normalButton' whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}>
                          Send Request
                        </motion.button>
                        <p>I will reach out to you shortly</p>
                      </div>
                    </div>
                  </>
                )
                :
                (
                  <>
                    <div className='middleBoxes'>
                      <div className="whatNeedBox">
                        <p id='describe'>Describe what you need</p>
                        <div contentEditable={true} className='contactUsInput'> </div>
                        <div className='sendReq'>
                          <motion.button className='normalButton' whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Send Request
                          </motion.button>
                          <p>I will reach out to you shortly</p>
                        </div>
                      </div>

                      <div className='blurb'>
                        <p>A redesign of an old site,</p>
                        <p>Or a brand new site.</p>
                        <p>We can manage your site after it is launched.</p>
                      </div>
                    </div>
                  </>
                )}

            </div>

            <div className='alternativeContact'>
              <p>You can also reach me at:</p>
              <div className='altBox'>
                <img src={email} alt='email icon' className='icon' />
                <p>Email: sampleemail@gmail.com</p>
              </div>
              <div className='altBox'>
                <img src={phone} alt='phone icon' className='icon' />
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
