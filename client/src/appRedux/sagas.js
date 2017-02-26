import { dashboardSagas } from '../modules';
import { extractSagas } from 'utils';

export default function* () {
	yield* [
		extractSagas(dashboardSagas)
	]
}
