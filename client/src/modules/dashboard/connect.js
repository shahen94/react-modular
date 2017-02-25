import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from './actions';

const mapStateToProps = (store) => ({
	data: store.dashboard.stuff.data,
	loading: store.dashboard.stuff.loading
});

const mapDispatchToProps = (dispatch) => ({
	getData: bindActionCreators(getData, dispatch)
});

export default function(component) {
	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(component);
}
