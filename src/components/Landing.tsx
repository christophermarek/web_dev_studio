import '../styles/landing.scss';
import { motion } from "framer-motion";

interface LandingProps {
    companyName: string,
    setCurrentPage: any,
    landingBackground: any,
}

export const Landing: React.FC<LandingProps> = ({ companyName, landingBackground, setCurrentPage }) => {

    return (
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
                <p id='middle'>Its not enought to look good, your website needs to drive conversions  and engage with your audience.</p>
            </div>
            <motion.button className="normalButton" onClick={() => setCurrentPage('main')} whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                Take me inside
            </motion.button>
        </motion.div>
    )

}