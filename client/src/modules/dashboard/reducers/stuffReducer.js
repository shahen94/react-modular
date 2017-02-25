import { GET_DATA } from '../constants';

const initialState = {
	data: [],
	loading: false
};

export default function (state = initialState, action = {}) {
	const { type } = action;
	switch (type) {
		case GET_DATA:
			return { ...state, loading: true };
		default:
			return state;
	}
}
