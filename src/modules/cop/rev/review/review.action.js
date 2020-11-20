import { createAction, handleActions } from 'redux-actions';
import { reviewService } from './review.service'
// import { alertActions } from '../../alert.action'

// Action Types
// import history from '../history'

export const reviewConstants = {
    REVIEW_REQUEST: 'REVIEW_GET_REQUEST',
    REVIEW_SUCCESS: 'REVIEW_GET_SUCCESS',
    REVIEW_FAILURE: 'REVIEW_GET_FAILURE',
}

export const getReviewSuccess = createAction(reviewConstants.REVIEW_SUCCESS);

// Initial State
const initialState = {
    reivews: [] 
}

// Reducer
const reviewReducer = handleActions(
    { [reviewConstants.REVIEW_SUCCESS]: (state, action) => ({ reviews: action.reivews }),
 },
    initialState
  )

  //Action
  export const reviewActions = {
    getReviews

  }

  function getReviews() {
        return dispatch => {
            dispatch(request())

            reviewService.getReviews()
            .then(
                reivews => {
                    dispatch(success(reivews))
                    console.log(reivews)
                    // history.push('/review')
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
        }

        function request() { return { type: reviewConstants.REVIEW_REQUEST } }
        function success(reivews) { return { type: reviewConstants.REVIEW_SUCCESS, reivews } }
        function failure(error) { return { type: reviewConstants.REVIEW_FAILURE, error } }
    }

    export default reviewReducer