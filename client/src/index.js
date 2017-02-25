import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Routes } from 'router';
import { store } from 'appRedux';
import 'bulma/bulma.sass';
import '../styles/main.scss';

render(
	<Provider store={store}>
		{Routes}
	</Provider>,
	document.getElementById('root')
);


if (module.hot) {
	module.hot.accept();
}
