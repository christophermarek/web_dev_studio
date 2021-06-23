import { motion, AnimatePresence } from "framer-motion"

interface FooterProps {
    companyName: string,
    email: any,
    linkedIn: any,
    github: any,
}

export const Footer: React.FC<FooterProps> = ({ companyName, email, linkedIn, github }) => {

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
                        <a href='https://mail.google.com/' target="_blank" rel="noreferrer" className='aTag'>
                            <motion.img src={email} alt='email icon' className='icon' whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} />
                        </a>
                        <a href='https://www.linkedin.com/in/christopher-marek-b7238419b/' target="_blank" rel="noreferrer" className='aTag'>
                            <motion.img src={linkedIn} alt='linkedin icon' className='icon' whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} />
                        </a>
                        <a href='https://github.com/christophermarek' target="_blank" rel="noreferrer" className='aTag'>
                            <motion.img src={github} alt='github icon' className='icon' whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} />
                        </a>

                    </AnimatePresence>
                </div>
            </div>
        </div>
    )

}