import { take, call, put } from 'redux-saga/effects';
import { GET_DATA } from '../constants';
import { getDataSuccess, getDataFailed } from '../actions';

async function ApiData() {
	return fetch('https://jsonplaceholder.typicode.com/posts');
}
function* fetchData(action) {
	try {
		const data = yield call(ApiData);
		const json = yield data.json();
		yield put(getDataSuccess(json));
	} catch (e) {
		yield put(getDataFailed(e));
	}
}

export default function* watchData() {
	while (true) {
		const action = yield take(GET_DATA);
		yield fetchData(action);
	}
}
