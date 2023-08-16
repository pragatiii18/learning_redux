import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productReducer";
//import { productsReducer} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product : selectedProductsReducer,
  
});
export default reducers;