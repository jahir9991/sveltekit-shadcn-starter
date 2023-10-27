import { Utils } from '$src/lib/utils';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({  }) => {
	

	await Utils.delay(2000);
	return {}
};
