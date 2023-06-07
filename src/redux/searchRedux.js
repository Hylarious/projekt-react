
export const updateSearch = payload => ({type: UPDATE_SEARCH, payload: payload})
 
const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCH = createActionName('UPDATE_SEARCH')

const searchReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCH:
      return action.payload
    default:
      return statePart;
  }
}

export default searchReducer
