import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

import test1 from '../../resource/imgs/home/test1.jpg';
import test2 from '../../resource/imgs/home/test2.jpg';
import banner1 from '../../resource/imgs/home/banner-s1.png';
import banner2 from '../../resource/imgs/home/banner-s2.png';
import banner3 from '../../resource/imgs/home/banner-s3.png';
import banner4 from '../../resource/imgs/home/banner-s4.png';

const Home = () => {
    return(
        <article className='container'>
            <div className='note-list'>
                <ul className='list-wrap'>
                    <li className='note-item'>
                    <div className='row-list'>
                        <a target='_blank' href='/'><h2 className='title'>
                            公告：关于暂停用户发布功能，并全面清查平台内容    
                        </h2></a>
                        <p className='abstract'>
                            亲爱的简书用户 「简书」因个别上传作品用户违反《中华人民共和国网络安全法》《互联网信息服务管理办法》《互联网新闻信息服务管理规定》《互联网用户公...
                        </p>
                        <div className='meta'>
                            <button className='eu-button diamond'>
                                <i className="icon diamond"></i>
                                <span className='label'>4726.3</span>
                            </button>
                            <button className='eu-button label'>
                                <span className='label'>简书</span>
                            </button>
                            <button className='eu-button like'>
                                <i className="icon like"></i>
                                <span className='label'>11676</span>
                            </button>
                        </div>
                        </div>
                    </li>

                    <li className='note-item'>
                        <a className='row-img' target='_blank' href='/'>
                            <img className='img' src={test1} alt='test' />
                        </a>
                        <div className='row-list'>
                            <a target='_blank' href='/'><h2 className='title'>
                                公告：关于暂停用户发布功能，并全面清查平台内容    
                            </h2></a>
                            <p className='abstract'>
                                亲爱的简书用户 「简书」因个别上传作品用户违反《中华人民共和国网络安全法》《互联网新闻信息服务管理规定》《互联网用户公...
                            </p>
                            <div className='meta'>
                                <button className='eu-button diamond'>
                                    <i className="icon diamond"></i>
                                    <span className='label'>4726.3</span>
                                </button>
                                <button className='eu-button label'>
                                    <span className='label'>简书</span>
                                </button>
                                <button className='eu-button like'>
                                    <i className="icon like"></i>
                                    <span className='label'>11676</span>
                                </button>
                            </div>
                        </div>
                    </li>

                    <li className='note-item'>
                        <a className='row-img' target='_blank' href='/'>
                            <img className='img' src={test2} alt='test' />
                        </a>
                        <div className='row-list'>
                            <a target='_blank' href='/'><h2 className='title'>
                                公告：关于暂停用户发布功能，并全面清查平台内容    
                            </h2></a>
                            <p className='abstract'>
                                亲爱的简书用户 「简书」因个别上传作品用户违反《中华人民共和国网络安全法》《互联网新闻信息服务管理规定》《互联网用户公...
                            </p>
                            <div className='meta'>
                                <button className='eu-button diamond'>
                                    <i className="icon diamond"></i>
                                    <span className='label'>4726.3</span>
                                </button>
                                <button className='eu-button label'>
                                    <span className='label'>简书</span>
                                </button>
                                <button className='eu-button like'>
                                    <i className="icon like"></i>
                                    <span className='label'>11676</span>
                                </button>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
            
            <div className='aside-list'>
                <div className='board'>
                    <a className='img-wrap' target='_bland' href='/'>
                        <img className='img' src={banner1} alt='banner1' />
                    </a>
                    <a className='img-wrap' target='_bland' href='/'>
                        <img className='img' src={banner2} alt='banner2' />
                    </a>
                    <a className='img-wrap' target='_bland' href='/'>
                        <img className='img' src={banner3} alt='banner3' />
                    </a>
                    <a className='img-wrap' target='_bland' href='/'>
                        <img className='img' src={banner4} alt='banner4' />
                    </a>
                </div>
            </div>
        </article>
    )
}

// const mapToState = (state) => {

// }

// const mapToDispatch = (dispatch) => {

// }

export default connect(null, null)(Home);