import { fork } from 'redux-saga/effects';

export default function extractSagas(sagaArray) {
	return sagaArray.map((saga) => fork(saga));
}
