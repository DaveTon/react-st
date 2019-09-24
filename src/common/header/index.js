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

                <section className='nav-wrap list'>
                    <Link to='/'>
                        <button className='eu-button home active'>
                            <i className="icon find"></i>
                            <span className='label'>首页</span>
                        </button>
                    </Link>

                </section>

                <section className='nav-wrap nav'>
                    <Link to='/'>
                        <button className='eu-button home active'>
                            <i className="icon find"></i>
                            <span className='label'>首页</span>
                        </button>
                    </Link>

                    <Link to='/follow'>
                        <button className='eu-button follow'>
                            <i className="icon follow"></i>
                            <span className='label'>关注</span>
                        </button>
                    </Link>

                    <Link to='/'>
                        <button className='eu-button massage'>
                            <i className="icon msg"></i>
                            <span className='label'>消息</span>
                        </button>
                    </Link>

                    <div className='eu-search active'>
                        <div className='eu-wrap'>
                            <input className='eu-input' placeholder='请输入内容' />
                            <button className='eu-button normal'>
                                <i className="icon search"></i>
                            </button>
                        </div>
                        <div className='eu-list'>
                            <div></div>
                        </div>
                    </div>
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