import '../styles/main.scss';
import buisnessPointing from '../assets/buisnessPointing.svg';
import buildingSite from '../assets/buildingSite.svg';
import webpage from '../assets/webpage.svg';

import { motion } from "framer-motion";
import { Footer } from './Footer';



interface MainProps {
    companyName: string,
    isPortrait: boolean,
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    linkedIn: string,
    github: string,
}

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

  const blurb = (textValues: blurbText, setCurrentPage: React.Dispatch<React.SetStateAction<string>>) => {
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

export const Main: React.FC<MainProps> = ({ companyName, isPortrait, setCurrentPage, email, linkedIn, github }) => {

    companyName = `${companyName}`;
    
    return (
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
                            {blurb(whatWeDo, setCurrentPage)}
                            <div className='imageBox'>
                                <img src={buildingSite} alt='man putting components onto site' />
                            </div>
                            {blurb(howWeHelp, setCurrentPage)}
                            <div className='imageBox topMargin'>
                                <img src={webpage} alt='drawing of web page components' />
                            </div>
                            {blurb(helpYourBuisnessGrow, setCurrentPage)}
                        </>
                    )
                    :
                    (
                        <>
                            <div className='mainLeft'>
                                {blurb(whatWeDo, setCurrentPage)}
                                <div className='imageBox topMargin'>
                                    <img src={buisnessPointing} alt='main pointing to chart' />
                                </div>
                                {blurb(helpYourBuisnessGrow, setCurrentPage)}
                            </div>

                            <div className='mainRight'>
                                <div className='imageBox'>
                                    <img src={buildingSite} alt='man putting components onto site' />
                                </div>
                                {blurb(howWeHelp, setCurrentPage)}
                                <div className='imageBox topMargin'>
                                    <img src={webpage} alt='drawing of web page components' />
                                </div>
                            </div>
                        </>
                    )}
            </div>
            <Footer companyName={companyName} email={email} github={github} linkedIn={linkedIn} />
        </motion.div>
    )
}