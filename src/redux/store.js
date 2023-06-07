import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors

export const getAllLists = (state) => state.lists

export const getListById = ({lists}, listId) => lists.find(list => list.id=== listId);

export const getFilteredColumns = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite)

export const getAllColumn = (state) => state.columns;

export const addList = payload => ({type: 'ADD_LIST', payload: payload})

export const toggleCardFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload: payload})

export const addColumn = payload => ({type: 'ADD_COLUMN', payload: payload});

export const addCard = payload => ({type: 'ADD_CARD', payload: payload})

export const updateSearch = payload => ({type: 'UPDATE_SEARCH', payload: payload})

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST' :
      return { ...state, lists: [...state.lists, {...action.payload, id: shortid() }]};
    case 'ADD_COLUMN' :
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD' :
      return { ...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    case 'UPDATE_SEARCH':
      return  {...state, searchString: action.payload};
    default : 
    return state
}
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;