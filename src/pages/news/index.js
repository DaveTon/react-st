import React from 'react';
import { connect } from 'react-redux';

const News = () => {
    return(
        <article className='container'>
            Hello News
        </article>
    )
}

// const mapToState = (state) => {

// }

// const mapToDispatch = (dispatch) => {

// }

export default connect(null, null)(News);