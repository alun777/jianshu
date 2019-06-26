import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const changeMouseIn = () => ({
  type: actionTypes.CHANGE_MOUSEIN
});

export const changeMouseLeave = () => ({
  type: actionTypes.CHANGE_MOUSELEAVE
});

export const showMore = (page) => ({
  type: actionTypes.SHOW_MORE,
  page: page
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      const action = changelist(data.data);
      dispatch(action);
    }).catch(() => {
      console.log('error')
    })
  }
};

const changelist = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 5)
});