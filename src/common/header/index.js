import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

import Logo from './../../resource/imgs/header/logo.png';

const Header = () => {
    return(
        <header className='eu-header'>
            <div className='wrap'>

                <Link to='/'>
                    <div className='eu-logo'>
                        <img className='img' src={Logo} alt='nav-logo' />
                    </div>
                </Link>

                <section className='header-content-wrap'>
                    <div className='nav navbar'>
                        <Link to='/'>
                            <button className='eu-button home active'>
                                <i className="icon find"></i>
                                <label className='label'>首页</label>
                            </button>
                        </Link>
                    </div>
                    
                    <div className='nav'></div>
                </section>
                
            </div>
        </header>
    )
}

// const mapToState = (state) => {

// }

// const mapToDispatch = (dispatch) => {

// }

export default connect(null, null)(Header);