import React from 'react'
import Amenities from './Amenities'
import data from './data'



const Multipal = () => {

  return (

    <>
      
      {data.map((val) => {
        return (

          <Amenities
            key={val.id}
            title={val.title}
            image={val.image}
          />

        )
      })}
    </>

  )
}

export default Multipal