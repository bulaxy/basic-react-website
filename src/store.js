//Basic Store
import { createStore } from 'redux';
import combineReducers from './reducers';

const store = createStore(combineReducers);

export default store;


//Store with Logger


// import { createStore, applyMiddleware } from 'redux';
// import rootReducers from './reducers';
// import { createLogger } from 'redux-logger'

// const middleWares = [];
// // middleWares.push();
// if (process.env.NODE_ENV === `development`) {
// 	// const { logger } = require('redux-logger');
// 	const logger = createLogger({
// 		collapsed:true,
// 	})
// 	middleWares.push(logger);
// }

// const store = createStore(rootReducers, applyMiddleware(...middleWares));
// export default store;

