import { compose, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import reducers from './reducers';
import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';

function configureStore() {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = compose(
		applyMiddleware(sagaMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : null
	)
	const store = createStore(reducers, middlewares);
	sagaMiddleware.run(sagas);

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			store.replaceReducer(require('./reducers').default);
		});
	}
	return store;
}

export default configureStore();
