import React from 'react'



const Amenities = (props) => {
  return (
    <>

      <div className="ameni-con">
      
        <div className='ameni-cont'>
          <img src={props.image} alt="" />
          <h3>{props.title}</h3>
        </div>
        
      </div>


    </>
  )
}

export default Amenities