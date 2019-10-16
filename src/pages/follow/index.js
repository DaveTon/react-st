import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import head from './../../resource/imgs/header/head-test.jpg';

class Follow extends React.Component{
    render(){
        return(
            <article className='container'>
                <aside className='aside'>
                    <div className='aside-header'>
                        <div className='header'>
                            <button className='eu-button'>
                                <span className='label'>关注全部</span>
                                <i className="icon dropdown"></i>
                            </button>
                            <button className='eu-button add'>
                                <span className='label'>添加关注</span>
                                <i className="icon dropdown"></i>
                            </button>
                        </div>
    
                        <div className='list'>
                            <div className='item'>
                                <button className='eu-button img img-head'>
                                    <img className='img' src={head} alt='user' />
                                    <span class="label">WEB前端之路</span>
                                </button>
                                <span className='item-label'>95</span>
                            </div>
                            <div className='item'>
                                <button className='eu-button img img-head'>
                                    <img className='img' src={head} alt='user' />
                                    <span class="label">WEB前端之路</span>
                                </button>
                                <span className='item-label'>95</span>
                            </div>
                            <div className='item'>
                                <button className='eu-button img img-head'>
                                    <img className='img' src={head} alt='user' />
                                    <span class="label">WEB前端之路</span>
                                </button>
                                <span className='item-label'>95</span>
                            </div>
                            <div className='item'>
                                <button className='eu-button img img-head'>
                                    <img className='img' src={head} alt='user' />
                                    <span class="label">WEB前端之路</span>
                                </button>
                                <span className='item-label'>95</span>
                            </div>
                            <div className='item'>
                                <button className='eu-button img img-head'>
                                    <img className='img' src={head} alt='user' />
                                    <span class="label">WEB前端之路</span>
                                </button>
                                <span className='item-label'>95</span>
                            </div>
                        </div>
                    </div>
    
                    <ul className='aside-list'>
                        <li className='item'></li>
                    </ul>
                </aside>
    
                <main className='main'>
    
                </main>
            </article>
        )
    }
}

// const mapToState = (state) => {

// }

// const mapToDispatch = (dispatch) => {

// }

export default connect(null, null)(Follow);