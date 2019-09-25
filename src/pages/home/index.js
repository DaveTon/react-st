import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const Home = () => {
    return(
        <article className='container'>
            <div className='note-list'>
                <ul className='list-wrap'>
                    <li className='note-item'>
                        <h2 className='title'>我是标题</h2>
                        <p className='abstract'>我是段落</p>
                        <div className='meta'>
                            <button className='eu-button'>
                                <i className="icon comments"></i>
                                <span className='label'>4726.3</span>
                            </button>
                            <button className='eu-button'>
                                <span className='label'>简书</span>
                            </button>
                            <button className='eu-button'>
                                <i className="icon like"></i>
                                <span className='label'>11676</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div className='aside-list'></div>
        </article>
    )
}

// const mapToState = (state) => {

// }

// const mapToDispatch = (dispatch) => {

// }

export default connect(null, null)(Home);