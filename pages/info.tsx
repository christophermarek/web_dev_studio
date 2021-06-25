import Head from 'next/head'

import { motion } from "framer-motion";
import { Footer } from '../components/footer';



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
            {textValues.text.map((element, index) =>
                <p key={index} className='blurbText'>{element}</p>
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

const info: React.FC<MainProps> = ({ companyName, isPortrait, setCurrentPage, email, linkedIn, github }) => {

    companyName = `${companyName}`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                zIndex: 1,
                y: [1000, 0],
                scaleX: 1,
                transition: {
                    duration: 0.5
                }
            }}
            exit={{
                opacity: 0,
                zIndex: 0,
                y: -1000,
                scaleX: 0,
                transition: {
                    duration: 2
                }
            }}
        >
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                                <img src={'./assets/buildingSite.svg'} alt='man putting components onto site' />
                            </div>
                            {blurb(howWeHelp, setCurrentPage)}
                            <div className='imageBox topMargin'>
                                <img src={'./assets/webpage.svg'} alt='drawing of web page components' />
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
                                    <img src={'./assets/buisnessPointing.svg'} alt='main pointing to chart' />
                                </div>
                                {blurb(helpYourBuisnessGrow, setCurrentPage)}
                            </div>

                            <div className='mainRight'>
                                <div className='imageBox'>
                                    <img src={'./assets/buildingSite.svg'} alt='man putting components onto site' />
                                </div>
                                {blurb(howWeHelp, setCurrentPage)}
                                <div className='imageBox topMargin'>
                                    <img src={'./assets/webpage.svg'} alt='drawing of web page components' />
                                </div>
                            </div>
                        </>
                    )}
            </div>
            <Footer companyName={companyName} email={email} github={github} linkedIn={linkedIn} />
        </motion.div>
    )
}

export default info;