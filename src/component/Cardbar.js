import React from 'react'
import image2 from '../image/image1.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from '../component/Form'

const Cardbar = () => {
  return (
    <>
      <section className='cardname'>
        <div className='container1'>
          <div className='formbox' data-aos="fade-down">
            <div>
              <h1>Lobus! Eligendi!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos quo ratione neque ea veritatis aliquam exercitationem modi harum quia.</p>
              <Form />
            </div>
           
          </div>
          <div className='imgbox1'>
            <img src={image2} alt="" />
          </div>
        </div>



      </section>

    </>
  )
}

export default Cardbar