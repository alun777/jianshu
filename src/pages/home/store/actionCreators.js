import axios from 'axios';
import { fromJS } from 'immutable'

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data;
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      dispatch(action);
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeMoreList.json?page=' + page).then((res) => {
      const result = res.data;
      const action = {
        type: 'add_home_data',
        articleList: fromJS(result.articleList),
        nextPage: page + 1
      }
      dispatch(action);
    })
  }
}

export const toggleTopShow = (show) => ({
  type: 'toggle_scroll_top',
  show
})