import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link'
import { AnimatePresence } from "framer-motion"

export default function Home() {
  const companyName = 'Webgineer'

  return (
    <AnimatePresence>
      <motion.div className={`landing`} style={{ backgroundImage: `url(./assets/Cornered-Stairs.svg)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
        <div className="nameHeader">
          <p id='title'>{companyName}</p>
          <p id='subTitle'>Website Development</p>
        </div>
        <div className="subText">
          <p id='idea'>It begins with an idea.</p>
          <p id='middle'>Its not enought to look good, your website needs to drive conversions  and engage with your audience.</p>
        </div>

          <Link href={`info`}>
            
              <motion.button className="normalButton" whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                Take me inside
              </motion.button>
          </Link>
      </motion.div>
    </AnimatePresence>
  )
}
