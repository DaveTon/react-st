import React from 'react';

import './style.scss';

class Header extends React.Component{
    render(){
        return(
            <header className='eu-header'>
                <div className='wrap'>
                    <div className='eu-logo'></div>

                    <nav className='eu-nav'>
                        <div className='menu'>首页</div>
                        <div className='menu'>App下载</div>
                        
                        <div className='eu-search'>
                            <div className='search'>
                                <input className='eu-input' placeholder='请输入' />
                                <button className='eu-button'>
                                    <i className='iconfont search'></i>
                                </button>
                            </div>
                            <div className='list'>
                                <div className='item'></div>
                            </div>
                        </div>
                    </nav>

                    <div className='eu-btnGroup'>
                        <button className='eu-button'>
                            <i className='iconfont jewel'></i>
                        </button>
                        <button className='eu-button'>
                            <i className='iconfont jewel'></i>
                        </button>
                        <button className='eu-button'>
                            <i className='iconfont jewel'></i>
                        </button>
                        <button className='eu-button'>
                            <i className='iconfont jewel'></i>
                        </button>
                        <button className='eu-button normal'>
                            <i className='iconfont jewel'></i>
                            <span className='text'>写文章</span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;