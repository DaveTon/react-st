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
                    {/* <Link to='/'> */}
                        <button className='eu-button btn'>
                            <i className="icon edit"></i>
                            <span className='label'>写文章</span>
                        </button>
                    {/* </Link> */}

                    <div className='eu-dropdown'>
                        <button className='eu-button'>
                            <i className="icon edit"></i>
                        </button>

                    </div>

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

                    <div className='eu-search'>
                        <div className='eu-wrap'>
                            <input className='eu-input' placeholder='请输入内容' />
                            <button className='eu-button normal circle'>
                                <i className="icon search"></i>
                            </button>
                        </div>
                        <div className='eu-list'>
                            <div className='hot-search'>

                                <div className='header-group'>
                                    <h3 className='title'>热门搜索</h3>
                                    <button className='eu-button normal'>
                                        <i className="icon switch"></i>
                                        <span className='label'>换一批</span>
                                    </button>
                                </div>

                                <div className='search-tag'>
                                    <button className='eu-button small'>
                                        <span className='label'>微信</span>
                                    </button>
                                    <button className='eu-button small'>
                                        <span className='label'>支付宝</span>
                                    </button>
                                    <button className='eu-button small'>
                                        <span className='label'>蚂蚁金服</span>
                                    </button>
                                    <button className='eu-button small'>
                                        <span className='label'>Python</span>
                                    </button>
                                    <button className='eu-button small'>
                                        <span className='label'>营销QQ</span>
                                    </button>
                                    <button className='eu-button small'>
                                        <span className='label'>企业QQ</span>
                                    </button>
                                    <button className='eu-button small'>
                                        <span className='label'>秋分</span>
                                    </button>
                                    <button className='eu-button small'>
                                        <span className='label'>容联七陌</span>
                                    </button>
                                    <button className='eu-button small'>
                                        <span className='label'>良心云</span>
                                    </button>
                                </div>
                            </div>
                            <div className='search-history'>
                                <div className='history-tag'>
                                    <button className='eu-button icon close'>
                                        <i className="icon clock"></i>
                                        <span className='label'>前端</span>
                                    </button>
                                    <button className='eu-button icon close'>
                                        <i className="icon clock"></i>
                                        <span className='label'>微信</span>
                                    </button>
                                    <button className='eu-button icon close'>
                                        <i className="icon clock"></i>
                                        <span className='label'>设计</span>
                                    </button>
                                    <button className='eu-button icon close'>
                                        <i className="icon clock"></i>
                                        <span className='label'>Python</span>
                                    </button>
                                </div>
                            </div>
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