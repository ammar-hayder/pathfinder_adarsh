import Form from '../component/Form'
import logo from '../image/logo1.png'

const header = () => {
  return (
    <>
      <div className='bg'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='a'>
          <div className='hero-con'>
            <div className='containt'>
              <h3>Adarsh heights</h3>
              <hr />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam quos facere eos saepe non laborum dolorem? Minima sed quod eaque, eum ratione, repudiandae reiciendis ipsam sapiente quidem corrupti vitae dolorem consequatur quo optio ipsum expedita quisquam? Dicta, dolor ea!</p>
            
             
            </div>
            <div className='form-con'>

              <form>
                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Name</label>
                  <input type="text" name='name' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Mobile</label>
                  <input type="phone" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-block btn-light">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default header