import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import * as actionCreations from '../store/actionCreators'
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem >
                <img alt='' className='pic' scr={item.get('imgUrl')}></img>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={()=> this.props.getMoreList(this.props.page)}>More</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('articleList'),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreations.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List);
