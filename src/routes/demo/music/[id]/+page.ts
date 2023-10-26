import { listenNowAlbums } from '$src/demo/data';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	console.log(params.id);

	return listenNowAlbums.find((item) => item.id == params.id);
};
