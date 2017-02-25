import React, { PropTypes, Component } from 'react';
import connect from './connect';

class Dashboard extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		loading: PropTypes.bool.isRequired,
		getData: PropTypes.func.isRequired
	};
	static defaultProps = {

	};
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>I'm a dashboard</div>
		);
	}
}

export default connect(Dashboard);
