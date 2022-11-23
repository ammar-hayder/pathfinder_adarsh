
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import image2 from '../image/image1.jpg'

const Form = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Request Brochure
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-con'>
            <form action="">
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" c name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Mobile</label>
                <input type="text" name='phone' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
            <div className='imgbox11'>
              <img src={image2} alt="" />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Form