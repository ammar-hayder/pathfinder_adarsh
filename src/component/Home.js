import React from 'react'

import Header from './Header';
import Footer from './Footer';
import Cardbar from './Cardbar';
import Location from './Location'
import Contact from './Contact'
import Cardbar2 from './Cardbar2';
import About from './About'
import Flotingwha from './Flotingwha'
import Multipal from './Multipal';
import Com from './Com';

const Home = () => {
  return (
    <>
      <Header />
      <Cardbar />
      <Com />
      <Cardbar2 />
      <About />
      <Multipal />
      <Location />
      <Contact />
      <Footer />
      <Flotingwha/>

    </>
  )
}

export default Home