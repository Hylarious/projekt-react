import shortid from "shortid";

export const getFilteredColumns = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllColumn = (state) => state.columns;

const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN =createActionName('ADD_COLUMN')

export const addColumn = payload => ({type: ADD_COLUMN, payload: payload});

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default columnsReducer