import * as visitedRestuarantAPIUtil from '../util/visit_util';

export const RECEIVE_VISITED = 'RECEIVE_VISITED';
export const RECEIVE_SINGLE_VISITED = 'RECEIVE_SINGLE_VISITED';
export const RECEIVE_NEW_VISITED = 'RECEIVE_NEW_VISITED';

export const receiveVisited = visited =>({
    type: RECEIVE_VISITED,
    visited
});

export const receiveSingleVisited = singleVisited =>({
    type: RECEIVE_SINGLE_VISITED,
    singleVisited
});

export const receiveNewVisited = singleVisited =>({
    type: RECEIVE_NEW_VISITED,
    singleVisited
})


//THUNK


export const fetchAllVisited = (userId) => dispatch =>(
    visitedRestuarantAPIUtil.fetchAllVisited(userId)
        .then(allVisited =>(dispatch(receiveVisited(allVisited))))
);

export const fetchSingleVisited = (visitedId) => dispatch =>(
    visitedRestuarantAPIUtil.fetchSingleVisited(visitedId)
        .then(visited => dispatch(receiveSingleVisited(visited)))
);

export const postVisited = (data) => dispatch => {
    console.log(data);
    return visitedRestuarantAPIUtil.postVisited(data)
        .then(visited => dispatch(receiveNewVisited(visited)))
};