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

      >
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet" />
          <link rel="icon" href="/public/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Website Development" />
          <meta property="og:url" content="https://webgineer.ca/" />
          <meta property="og:title" content="Webgineer" />
          <meta property="og:description" content="Web Development Studio" />
          <meta property="og:site_name" content="Website Development" />
          <meta property="og:image" content="https://webgineer.ca/public/android-chrome-512x512.png" />
          <meta property="fb:app_id" content="000000" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <link rel="apple-touch-icon" href="/public/logo192.png" />
          <link rel="manifest" href="/public/manifest.json" />
          <title>Webgineer</title>
        </Head>
        <div className="nameHeader">
          <p id='title'>{companyName}</p>
          <p id='subTitle'>Website Development</p>
        </div>
        <div className="subText">
          <p id='idea'>Bring your company the online attention it deserves.</p>
          <p id='middle'>It's not enough to look good, your website needs to drive conversions and engage with your audience.</p>
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
