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
                        <div className='list'>
                            <button className='eu-button'>
                                <span className='text'>Aa</span>
                            </button>
                            <button className='eu-button'>
                                <i className='iconfont jewel'></i>
                            </button>
                            <button className='eu-button pure'>
                                <span className='text'>登陆</span>
                            </button>
                            <button className='eu-button normal'>
                                <span className='text'>注册</span>
                            </button>
                            <button className='eu-button normal active'>
                                <i className='iconfont write'></i>
                                <span className='text'>写文章</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;