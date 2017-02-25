import React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { dashboardRoutes } from 'modules';

const history = createBrowserHistory();

export default (
	<Router history={history}>
		{dashboardRoutes}
	</Router>
);
