import merge from 'lodash/merge';
import { UPDATE_FILTER } from '../../actions/filter_actions';

const defaultFilter = {
  bounds: {}
}

const filterReducer = (oldState = defaultFilter, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case UPDATE_FILTER:
      const newFilter = { [action.filter]: action.value }
      return merge({}, oldState, newFilter);
    default:
      return oldState;
  }
}

export default filterReducer;