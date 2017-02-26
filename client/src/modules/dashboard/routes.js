import React from 'react';
import { Route } from 'react-router';
import { asyncRoute } from 'utils';

const Dashboard = asyncRoute(() => {
	return new Promise((resolve) => {
		require.ensure([], () => resolve(require('./Dashboard.container')));
	});
});

export default (
	<Route path="/" component={Dashboard} />
);
