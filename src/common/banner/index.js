import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

import HomeBanner1 from './../../resource/imgs/banner/banner1.png';

class HomeBanner extends React.Component{

    render(){
        return(
            <div className='home-banner'>
                <div className='banner-list'>
                    <Link to='/'>
                        <div className='banner-item'>
                            <img className='img' src={HomeBanner1} alt='banner' />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}


export default connect(null, null)(HomeBanner);