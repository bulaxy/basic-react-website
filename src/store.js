//Store with Redux logger
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import { createLogger } from 'redux-logger'

const middleWares = [];
if (process.env.NODE_ENV === `development`) {
	const logger = createLogger({
		collapsed:true,
	})
	middleWares.push(logger);
}

const store = createStore(rootReducers, applyMiddleware(...middleWares));
export default store;