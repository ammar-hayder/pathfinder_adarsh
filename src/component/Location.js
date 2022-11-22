import React from 'react'

const Location = () => {
  return (
    <>
      <div className='map'>
      
          <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7439.150325933936!2d72.82088118665597!3d21.209029241872326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef331db9f5d%3A0x868f7bd276f58489!2sRampura%2C%20Surat%2C%20Gujarat%20395003!5e0!3m2!1sen!2sin!4v1667817916456!5m2!1sen!2sin"
            style=
            {{
              width: "100%",
              height: "500px",
              style: "border:0",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}>
          </iframe>
        
          <div className='location'>
            <h4>Location</h4>
            <p>The Perfect Neighborhood To Call Home
              <br />Enjoy the convenience of urban living with well-developed social infrastructure like schools, hospitals, hotels, retail, dining and entertainment in close proximity to the project.
            </p>
            <ul>
              <li>Manipal Hospital - 1.0 Km</li>
              <li>Cloud Nine Hospital - 1.5 Kms</li>
              <li>Ryan International School - 5.2 Kms </li>
              <li>Inorbit Mall - 2.9 Kms </li>
              <li>Forum Mall - 1.0 Kms</li>
              <li>Windmills Craftworks - 4.8 Kms</li>
            </ul>

          </div>
      </div>


    </>
  )
}

export default Location