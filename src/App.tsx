import React, { useState } from 'react';
import './App.scss';
import { AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

import email from './assets/email.svg';
import github from './assets/github.svg';
import linkedIn from './assets/linkedIn.svg';
import x from './assets/iconmonstr-arrow-64.svg';
import phone from './assets/phone.svg';
import landingBackground from './assets/Cornered-Stairs.svg';

import { Landing } from './components/Landing';
import { Main } from './components/Main';
import { Quote } from './components/Quote';

function App() {

  const [currentPage, setCurrentPage] = useState<string>('landing');

  const companyName = 'Webgineer';
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div className="App" >
      <AnimatePresence>
        {currentPage === 'landing' &&
          <>
            <Landing companyName={companyName} setCurrentPage={setCurrentPage} landingBackground={landingBackground} />
          </>
        }
      </AnimatePresence>

      <AnimatePresence>
        {currentPage === 'main' &&
          <>
            <Main companyName={companyName} isPortrait={isPortrait} setCurrentPage={setCurrentPage} email={email} linkedIn={linkedIn} github={github} />
          </>
        }
      </AnimatePresence>
      {currentPage === 'quote' &&
        <>
          <Quote companyName={companyName} isPortrait={isPortrait} setCurrentPage={setCurrentPage} email={email} linkedIn={linkedIn} github={github} phone={phone} x={x} />
        </>
      }
    </div>
  );
}

export default App;
