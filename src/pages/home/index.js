import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
    return(
        <article className='container-index'>
            Hello Home
            <i class="fas fa-user"></i>
            <i class="far fa-user"></i> 
            <i class="fal fa-user"></i>
        </article>
    )
}

// const mapToState = (state) => {

// }

// const mapToDispatch = (dispatch) => {

// }

export default connect(null, null)(Home);