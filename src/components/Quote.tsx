import { motion, AnimatePresence } from "framer-motion"

import { Footer } from './Footer';



interface QuoteProps {
    companyName: string,
    isPortrait: boolean,
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    linkedIn: string,
    github: string,
    phone: string, 
    x: string
}

export const Quote: React.FC<QuoteProps> = ({ companyName, isPortrait, setCurrentPage, email, linkedIn, github, phone, x }) => {

    return (
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

            <Footer companyName={companyName} email={email} github={github} linkedIn={linkedIn} />
        </>
    )
}