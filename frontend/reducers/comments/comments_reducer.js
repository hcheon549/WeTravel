// import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../../ACTIONS/comments_actions';

// const commentsReducer = (oldState = {}, action) => {
//   Object.freeze(oldState);
  
//   switch(action.type) {
//     case RECEIVE_ALL_COMMENTS:
//       return {};
//     case RECEIVE_COMMENT:
//       return {};
//     case REMOVE_COMMENT:
//       let newState = Object.assign({}, oldState)
//       delete newState[action.commentId]
//       return newState;
//     default:
//       return oldState;
//   }
// }

// export default commentsReducer;