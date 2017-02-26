import {
	GET_DATA,
	GET_DATA_FAILED,
	GET_DATA_SUCCESS
} from '../constants';

const initialState = {
	data: [],
	loading: false,
	error: null
};

export default function (state = initialState, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case GET_DATA:
			return { ...state, loading: true };
		case GET_DATA_SUCCESS:
			return { ...state, loading: false, data: payload };
		case GET_DATA_FAILED:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
}
