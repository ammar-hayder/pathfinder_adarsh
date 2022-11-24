import React from 'react'
import map1 from '../image/map1.png'

const Mapbar = () => {
    return (
        <>
           <div>
            <div className='map-text'>
                <h3>Adarsh Park Heights Masterplan</h3>
            </div>
            <div className='map-img'>
                <img src={map1} alt="map1" />
            </div>
           </div>
        </>
    )
}

export default Mapbar