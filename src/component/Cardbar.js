import React from 'react'
import image2 from '../image/image1.jpg'
import Form from '../component/Form'

const Cardbar = () => {
  return (
    <>
      <section className='cardname'>
        <div className='container1'>
          <div className='formbox'>
            <div>
              <h1>Lobus! Eligendi!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos quo ratione neque ea veritatis aliquam exercitationem modi harum quia.</p>
              <a href="#">Request Brausher</a>
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