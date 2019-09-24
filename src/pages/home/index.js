import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
    return(
        <article className='container-index'>
            Hello Home
        </article>
    )
}

// const mapToState = (state) => {

// }

// const mapToDispatch = (dispatch) => {

// }

export default connect(null, null)(Home);