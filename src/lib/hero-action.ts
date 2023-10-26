export function hero(node: HTMLElement, heroName) {
	console.log(heroName);
	if (heroName) node.style['viewTransitionName'] = `v-t-n-${heroName}`;

	return {
		update(heroName) {
			if (heroName) node.style['viewTransitionName'] = `v-t-n-${heroName}`;
		}
	};
}
