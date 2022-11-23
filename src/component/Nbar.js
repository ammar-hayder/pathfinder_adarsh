import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../image/logo1.png';

const Nbar = () => {
    return (
        <>
            <div className='dg'>
                <nav className="navbar navbar-expand-lg navbar-light">
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
                </nav>
                
            </div>
        </>
    )
}

export default Nbar