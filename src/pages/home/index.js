import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';

import './style.scss';
import HomeBanner from '../../common/banner';

import banner1 from '../../resource/imgs/home/banner-s1.png';
import banner2 from '../../resource/imgs/home/banner-s2.png';
import banner3 from '../../resource/imgs/home/banner-s3.png';
import banner4 from '../../resource/imgs/home/banner-s4.png';

class Home extends React.Component{
    componentDidMount(){
        this.props.changeHomeData();
    }

    render(){
        const { handelChangeAuthor, topicList, authorList } = this.props;
        return(
            <article className='container'>
                <div className='side-tool'>
                    <button className='eu-button'>
                        <i className='icon dropright'></i>
                    </button>
                </div>
    
                <div className='note-list'>
                    <HomeBanner />

                    <ul className='list-wrap'>
                        {
                            topicList.map((item) => {
                                return(
                                    <li className='note-item'
                                        key={item.id}
                                    >
                                        <a className='row-img' target='_blank' href='/'>
                                            <img className='img' src={item.imgUrl} alt='test' />
                                        </a>
                                        <div className='row-list'>
                                            <a target='_blank' href='/'>
                                                <h2 className='title'>{item.title}</h2>
                                            </a>
                                            <p className='abstract'>{item.abstract}</p>
                                            <div className='meta'>
                                                <button className='eu-button diamond'>
                                                    <i className="icon diamond"></i>
                                                    <span className='label'>{item.paid}</span>
                                                </button>
                                                <button className='eu-button label'>
                                                    <span className='label'>{item.userName}</span>
                                                </button>
                                                <button className='eu-button like'>
                                                    <i className="icon like"></i>
                                                    <span className='label'>{item.like}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                
                <div className='aside-list'>
                    <div className='wrap'>
                        <div className='board'>
                            <a className='img-wrap' target='_bland' href='/'>
                                <img className='img' src={banner1} alt='banner1' />
                            </a>
                            <a className='img-wrap' target='_bland' href='/'>
                                <img className='img' src={banner2} alt='banner2' />
                            </a>
                            <a className='img-wrap' target='_bland' href='/'>
                                <img className='img' src={banner3} alt='banner3' />
                            </a>
                            <a className='img-wrap' target='_bland' href='/'>
                                <img className='img' src={banner4} alt='banner4' />
                            </a>
                        </div>
    
                        <div className='authors'>
                            <div className='header'>
                                <button className='eu-button title'>
                                    <span className='label'>????????????</span>
                                </button>
                                <button 
                                    onClick={() => {handelChangeAuthor(this.spinIcon)}}
                                    className='eu-button refresh'
                                >
                                    <i ref={(icon) => {this.spinIcon = icon}} className="icon refresh"></i>
                                    <span className='label'>?????????</span>
                                </button>
                            </div>
    
                            <div className='author-list'>
                                {
                                    authorList.map((item) => {
                                        return(
                                            <div 
                                                key={item.id}
                                                className='item'
                                            >
                                                <button className='eu-button img'>
                                                    <img className='img' src={item.imgUrl} alt='user' />
                                                </button>
                                                <div className='follow'>
                                                    <h3 className='title'>{item.userName}</h3>
                                                    <p className='content'>??????165.9k??? ?? 3.5k??????</p>
                                                </div>
                                                <button className='eu-button plus'>
                                                    <i className="icon plus"></i>
                                                    <span className='label'>??????</span>
                                                </button>
                                            </div>
                                        )
                                    })
                                }
    
                                <div className='item find-more'>
                                    <button className='eu-button dropright'>
                                        <i className="icon dropright"></i>
                                        <span className='label'>????????????</span>
                                    </button>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

const mapToState = (state) => ({
    topicList: state.home.topicList,
    authorList: state.home.authorList
});

const mapToDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actions.getHomeDataInfo());
        dispatch(actions.getAuthorListInfo());
    },
    handelChangeAuthor(spin){
        let orginAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        if(orginAngle){
            orginAngle = parseInt(orginAngle, 10);
        }else{
            orginAngle = 0;
        }
        spin.style.transform = 'rotate(' + (orginAngle + 360) + 'deg)';
        console.log(orginAngle);
    }
});

export default connect(mapToState, mapToDispatch)(Home);