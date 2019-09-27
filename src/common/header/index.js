import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';
import * as actions from './store/actions';

import Logo from './../../resource/imgs/header/logo.png';
import head from './../../resource/imgs/header/head-test.jpg';
import assets from './../../resource/imgs/header/assets.png';

class Header extends React.Component{

    getListArea(){
        const { focused, mouseIn, searchData, historyData, handelMouseEnter, handelMouseLeave } = this.props;
        if(focused || mouseIn){
            return(
                <div className='eu-list'
                    onMouseEnter={handelMouseEnter}
                    onMouseLeave={handelMouseLeave}
                >
                    <div className='hot-search'>
                        <div className='header-group'>
                            <h3 className='title'>热门搜索</h3>
                            <button className='eu-button normal'>
                                <i className="icon switch"></i>
                                <span className='label'>换一批</span>
                            </button>
                        </div>
                        <div className='search-tag'>
                            {
                                searchData.map((item) => {
                                    return(
                                        <button className='eu-button small' key={item}>
                                            <span className='label'>{item}</span>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='search-history'>
                        <div className='history-tag'>
                            {
                                historyData.map((item) => {
                                    return(
                                        <button className='eu-button icon close' key={item}>
                                            <i className="icon clock"></i>
                                            <span className='label'>{item}</span>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        }else{
            return null;
        }
    };

    render(){
        const { focused, searchData, handelFocused, handelBlur } = this.props;
        return(
            <header className='eu-header'>
                <div className='wrap'>

                    <Link to='/'>
                        <div className='eu-logo'>
                            <img className='img' src={Logo} alt='nav-logo' />
                        </div>
                    </Link>

                    <section className='nav-wrap list'>
                        <Link to='/'>
                            <button className='eu-button btn'>
                                <i className="icon edit"></i>
                                <span className='label'>写文章</span>
                            </button>
                        </Link>

                        <div className='eu-dropdown'>
                            <button className='eu-button img img-head'>
                                <img className='img' src={head} alt='user' />
                                <i className="icon dropdown"></i>
                            </button>
                            <div className='drop-list'>
                                <button className='eu-button normal list'>
                                    <i className="icon user"></i>
                                    <span className='label'>我的主页</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon bookmark"></i>
                                    <span className='label'>收藏的文章</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon like"></i>
                                    <span className='label'>喜欢的文章</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon paid"></i>
                                    <span className='label'>已购内容</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon vallet"></i>
                                    <span className='label'>我的钱包</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon set"></i>
                                    <span className='label'>设置</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon help"></i>
                                    <span className='label'>帮助与反馈</span>
                                </button>

                                <button className='eu-button normal list'>
                                    <i className="icon exit"></i>
                                    <span className='label'>退出</span>
                                </button>
                            </div>
                        </div>

                        <button className='eu-button img img-assets'>
                            <img className='img' src={assets} alt='assets' />
                        </button>

                        <button className='eu-button nav label'>
                            <span className='label'>Aa</span>
                        </button>

                    </section>

                    <section className='nav-wrap nav'>
                        <Link to='/'>
                            <button className='eu-button nav home active'>
                                <i className="icon find"></i>
                                <span className='label'>首页</span>
                            </button>
                        </Link>

                        <Link to='/follow'>
                            <button className='eu-button nav follow'>
                                <i className="icon follow"></i>
                                <span className='label'>关注</span>
                            </button>
                        </Link>

                        <Link to='/news'>
                            <div className='eu-dropdown'>
                                <button className='eu-button nav massage'>
                                    <i className="icon comments"></i>
                                    <span className='label'>评论</span>
                                </button>
                                <div className='drop-list'>
                                    <button className='eu-button normal list'>
                                        <i className="icon comments"></i>
                                        <span className='label'>评论</span>
                                    </button>

                                    <button className='eu-button normal list'>
                                        <i className="icon chats"></i>
                                        <span className='label'>简信</span>
                                    </button>

                                    <button className='eu-button normal list'>
                                        <i className="icon requests"></i>
                                        <span className='label'>投稿请求</span>
                                    </button>

                                    <button className='eu-button normal list'>
                                        <i className="icon likes"></i>
                                        <span className='label'>喜欢和赞</span>
                                    </button>

                                    <button className='eu-button normal list'>
                                        <i className="icon follows"></i>
                                        <span className='label'>关注</span>
                                    </button>

                                    <button className='eu-button normal list'>
                                        <i className="icon money"></i>
                                        <span className='label'>赞赏和付费</span>
                                    </button>

                                    <button className='eu-button normal list'>
                                        <i className="icon others"></i>
                                        <span className='label'>其他提醒</span>
                                    </button>

                                </div>
                            </div>
                        </Link>

                        <div 
                            className={ focused ? 'eu-search active' : 'eu-search'}
                            onFocus={() => handelFocused(searchData)}
                            onBlur={handelBlur}
                        >
                            <div className='eu-wrap'>
                                <input className='eu-input' placeholder='请输入内容' />
                                <button className='eu-button normal circle'>
                                    <i className="icon search"></i>
                                </button>
                            </div>
                            
                            {this.getListArea()}
                        </div>
                    </section>
                    
                </div>
            </header>
        )
    }
}

const mapToState = (state) => ({
    // 注意：使用 combineReducers 拆分之后需要加上该数据所属的state模块
    focused: state.header.focused,
    mouseIn: state.header.mouseIn,
    searchData: state.header.searchData,
    historyData: state.header.historyData
});

const mapToDispatch = (dispatch) => ({
    handelFocused(searchData){
        console.log(searchData)
        if(searchData.length === 0){
            dispatch(actions.getListData());
        }
        dispatch(actions.changeFocused());
    },

    handelBlur(){
        dispatch(actions.changeBlur());
    },

    handelMouseEnter(){
        dispatch(actions.mouseEnter());
    },

    handelMouseLeave(){
        dispatch(actions.mouseLeave());
    }
});

export default connect(mapToState, mapToDispatch)(Header);