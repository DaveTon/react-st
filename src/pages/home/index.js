import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const Home = () => {
    return(
        <article className='container'>
            Hello Home
        </article>
    )
}

// const mapToState = (state) => {

// }

// const mapToDispatch = (dispatch) => {

// }

export default connect(null, null)(Home);