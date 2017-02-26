import { createAction } from 'redux-actions';
import {
	GET_DATA,
	GET_DATA_SUCCESS,
	GET_DATA_FAILED
} from '../constants';

export const getData = createAction(GET_DATA);
export const getDataSuccess = createAction(GET_DATA_SUCCESS);
export const getDataFailed = createAction(GET_DATA_FAILED);
