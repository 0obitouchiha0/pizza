import { combineReducers } from "redux";
import pizzas from './pizzas';
import filter from './filter';
import cart from './cart';

const rootReducer = combineReducers({
  filter,
  pizzas,
  cart
})

export default rootReducer;