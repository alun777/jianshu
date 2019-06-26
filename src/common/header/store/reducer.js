import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  originList: [],
  showMoreList: [],
  mouseIn: false,
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    return state.set('originList', action.data).set('showMoreList', action.data).set('totalPage', action.totalPage)
  }
  if (action.type === actionTypes.CHANGE_MOUSEIN) {
    return state.set('mouseIn', true)
  }
  if (action.type === actionTypes.CHANGE_MOUSELEAVE) {
    return state.set('mouseIn', false)
  }
  if (action.type === actionTypes.SHOW_MORE) {
    // console.log(action.page)
    return state.set('page', action.page)
  }
  return state;
};
