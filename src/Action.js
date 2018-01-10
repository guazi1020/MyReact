import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';


/**
 *  定义的并不是action本身，而是能够产生并派发action对象函数
 * @param {*} counterCaption 
 */
export const increment=(counterCaption)=>{
    AppDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    });
}

export const decrement=(counterCaption)=>{
    AppDispatcher.dispatch({
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    });
}