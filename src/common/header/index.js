import React from 'react';

import './style.scss';

class Header extends React.Component{
    render(){
        return(
            <header className='eu-header'>
                <div className='wrap'>
                    <div className='eu-logo'></div>
                    <nav className='eu-nav'></nav>
                    <div className='eu-btnGroup'>
                        <button className='eu-button'></button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;