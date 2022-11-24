
import React, { useEffect, useState } from 'react';




const Amenities = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    setUser(await response.json());




  }
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <div className="ameni-con">
        {
          user.map((curEle) => {
            return (
              <div className='ameni-cont'>
               <h1>{curEle.userId}</h1>
                <h3>{curEle.title}</h3>
              </div>
            )
          })
        }
      </div>


    </>
  )
}

export default Amenities