// import logo from '../image/logo1.png';
import 'aos/dist/aos.css';
// import {NavLink} from 'react-router-dom';
import logo3 from '../image/logo3.png'

const Header = () => {

  return (
    <>
      <div className='bg'>
        {/* <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink to='/' className="navbar-brand" href="#"><img src={logo} alt="" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <NavLink to='/' className="nav-link active" aria-current="page" href="#">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/about' className="nav-link" href="#">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/contact' className="nav-link" href="#">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <div className='container'>
          <div className='hero-con'>
            <div className='content' data-aos="fade-right" >
              <h3>Welcome to ADARSH PARK HEIGHTS</h3>
              <hr />
              <h4>Gunjur, East Banglore</h4>
              <img className='img-f' src={logo3} alt="logo2" />
              <br/>
              
            </div>
            <div className='form-con'>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                  <input type="text" name='name' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
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

export default Header