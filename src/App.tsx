import React, { useState } from 'react';
import './App.css';

function App() {

  const [currentPage, setCurrentPage] = useState<string>('landing');
  let companyName = 'Comapny Name';

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
              <input type='button' value='Request a quote' className='btnReq'/>
              
            </div>
          </div>
      </>
    }


        </div>
  );
}

      export default App;
