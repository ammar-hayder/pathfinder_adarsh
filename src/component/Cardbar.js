import React from 'react'
import image2 from '../image/image1.jpg'
import Form from '../component/Form'

const Cardbar = () => {
  return (
    <>
      <section className='cardname'>
        <div className='container1'>
          <div className='imgbox1'>
            <img src={image2} alt="" />
          </div>
          <div className='formbox'>
            <div>
              <h1>Lobus! Eligendi!</h1>
            </div>
            <Form />
          </div>
        </div>


      </section>

    </>
  )
}

export default Cardbar