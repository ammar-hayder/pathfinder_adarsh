import React from 'react'

const Form = () => {
  return (
    <>
    <div className='form-con'>
            <form action="">
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text"c name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Mobile</label>
                <input type="text" name='phone' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  
              </div>
              
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

          </div>

    </>
  )
}

export default Form