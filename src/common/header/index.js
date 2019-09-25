import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

import Logo from './../../resource/imgs/header/logo.png';
import head from './../../resource/imgs/header/head-test.jpg';
import assets from './../../resource/imgs/header/assets.png';

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
                        <button className='eu-button img img-head'>
                            <img className='img' src={head} alt='user' />
                            <i className="icon dropdown"></i>
                        </button>
                        <div className='drop-list'>
                            <button className='eu-button normal list'>
                                <i className="icon user"></i>
                                <span className='label'>我的主页</span>
                            </button>

                            <button className='eu-button normal list'>
                                <i className="icon bookmark"></i>
                                <span className='label'>收藏的文章</span>
                            </button>

                            <button className='eu-button normal list'>
                                <i className="icon like"></i>
                                <span className='label'>喜欢的文章</span>
                            </button>

                            <button className='eu-button normal list'>
                                <i className="icon paid"></i>
                                <span className='label'>已购内容</span>
                            </button>

                            <button className='eu-button normal list'>
                                <i className="icon vallet"></i>
                                <span className='label'>我的钱包</span>
                            </button>

                            <button className='eu-button normal list'>
                                <i className="icon set"></i>
                                <span className='label'>设置</span>
                            </button>

                            <button className='eu-button normal list'>
                                <i className="icon help"></i>
                                <span className='label'>帮组与反馈</span>
                            </button>

                            <button className='eu-button normal list'>
                                <i className="icon exit"></i>
                                <span className='label'>退出</span>
                            </button>
                        </div>
                    </div>

                    <button className='eu-button img img-assets'>
                        <img className='img' src={assets} alt='assets' />
                    </button>

                    <button className='eu-button nav label'>
                        <span className='label'>Aa</span>
                    </button>

                </section>

                <section className='nav-wrap nav'>
                    <Link to='/'>
                        <button className='eu-button nav home active'>
                            <i className="icon find"></i>
                            <span className='label'>首页</span>
                        </button>
                    </Link>

                    <Link to='/follow'>
                        <button className='eu-button nav follow'>
                            <i className="icon follow"></i>
                            <span className='label'>关注</span>
                        </button>
                    </Link>

                    <Link to='/news'>
                        <div className='eu-dropdown'>
                            <button className='eu-button nav massage'>
                                <i className="icon msg"></i>
                                <span className='label'>消息</span>
                            </button>
                            <div className='drop-list'>
                                <button className='eu-button normal list'>
                                    <i className="icon user"></i>
                                    <span className='label'>我的主页</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon bookmark"></i>
                                    <span className='label'>收藏的文章</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon like"></i>
                                    <span className='label'>喜欢的文章</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon paid"></i>
                                    <span className='label'>已购内容</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon vallet"></i>
                                    <span className='label'>我的钱包</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon set"></i>
                                    <span className='label'>设置</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon help"></i>
                                    <span className='label'>帮组与反馈</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon exit"></i>
                                    <span className='label'>退出</span>
                                </button>
                            </div>
                        </div>
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