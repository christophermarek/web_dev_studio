/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Footer } from '../components/footer';
import Head from 'next/head'
import Link from 'next/link'

interface QuoteProps {

}

const Quote: React.FC<QuoteProps> = ({ }) => {

    const inputEl = useRef<HTMLDivElement>(null);
    const companyName = 'Webgineer';
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const email = '/assets/email.svg';
    const github = '/assets/github.svg';
    const linkedIn = '/assets/linkedIn.svg';
    const x = '/assets/x.svg';
    const phone = '/assets/phone.svg';

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const sendRequest = () => {
        if (inputEl != null) {
            if (inputEl.current != null) {
                window.open(`mailto:chris@webgineer.ca?subject=Requesting a Quote&body=${inputEl.current.innerText}`)
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
        >
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet" />
                <link rel="icon" href="/public/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Website Development" />
                <meta property="og:url" content="https://webgineer.ca/" />
                <meta property="og:title" content="Webgineer" />
                <meta property="og:description" content="Web Developer Studio" />
                <meta property="og:site_name" content="Website Development" />
                <meta property="og:image" content="https://webgineer.ca/public/android-chrome-512x512.png" />
                <meta property="fb:app_id" content="000000" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <link rel="apple-touch-icon" href="/public/logo192.png" />
                <link rel="manifest" href="/public/manifest.json" />
                <title>Webgineer | Quote</title>
            </Head>
            <div className='contactTop'>
                <button onClick={() => true}>
                    <AnimatePresence>
                        <Link
                            href='info'>
                            <motion.img src={x} alt='back button icon' whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.9 }} />
                        </Link>
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
                                    <p>A redesign of an old site, or a brand new site.</p>
                                    <p>We can build it.</p>
                                    <p>After it is launched, we can host and manage your site.</p>
                                </div>

                                <div className="whatNeedBox">
                                    <p id='describe'>Describe what you need</p>
                                    <div contentEditable={true} className='contactUsInput' suppressContentEditableWarning={true} ref={inputEl}> </div>
                                    <div className='sendReq'>
                                        <motion.button className='normalButton' onClick={sendRequest} whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}>
                                            Send Request
                                        </motion.button>
                                        <p>You will recieve a response shortly</p>
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
                                        <div contentEditable={true} className='contactUsInput' suppressContentEditableWarning={true} ref={inputEl}> </div>
                                        <div className='sendReq'>
                                            <motion.button className='normalButton' whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }} onClick={sendRequest}>
                                                Send Request
                                            </motion.button>
                                            <p>You will recieve a response shortly</p>
                                        </div>
                                    </div>

                                    <div className='blurb'>
                                        <p>A redesign of an old site, or a brand new site.</p>
                                        <p>We can build it.</p>
                                        <p>After it is launched, we can host and manage your site.</p>
                                    </div>
                                </div>
                            </>
                        )}

                </div>

                <div className='alternativeContact'>
                    <p>You can also reach me at:</p>
                    <div className='altBox'>
                        <img src={email} alt='email icon' className='icon' />
                        <p>Email: chris@webgineer.ca</p>
                    </div>
                    <div className='altBox'>
                        <img src={phone} alt='phone icon' className='icon' />
                        <p>Phone: (647) 697-1641 Call or Text</p>
                    </div>
                </div>

            </div>

            <Footer companyName={companyName} email={email} github={github} linkedIn={linkedIn} />
        </motion.div>
    )
}

export default Quote;