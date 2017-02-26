import React, { PropTypes, Component } from 'react';
import { List } from './components';
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
	componentDidMount() {
		this.props.getData();
	}
	render() {
		const { data, loading } = this.props;
		return (
			<div>
				{loading && <div>Loading</div>}
				<List data={data} />
			</div>
		);
	}
}

export default connect(Dashboard);
