import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import {reducer as authReducer} from "./authReducer/reducer";
import {reducer as productReducer} from "./productReducer/reducer";
import {reducer as wishlistReducer} from "./WishlistReducer/reducer";

const rootReducer=combineReducers({
    authReducer,
    productReducer,
    wishlistReducer

})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))