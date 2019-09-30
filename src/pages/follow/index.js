import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Follow = () => {
    return(
        <article className='container'>
            <aside className='aside'>
                <div className='aside-header'>

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

// const mapToState = (state) => {

// }

// const mapToDispatch = (dispatch) => {

// }

export default connect(null, null)(Follow);