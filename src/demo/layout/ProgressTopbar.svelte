<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { navigating } from '$app/stores';

	const progress = tweened(0, {
		easing: cubicOut
	});

	$: {
		if ($navigating) {
			progress.set(0.7, { duration: 5000 });
		} else {
			progress.set(1, { duration: 500 }).then(() => {
				progress.set(0, { duration: 0 });
			});
		}
	}
</script>

<div class="progress-bar shadow-lg">
	<div class="progress-sliver rounded-r-2xl" style={`--width: ${$progress * 100}%`} />
</div>

<style lang="postcss">
	.progress-bar {
		view-transition-name: progressbar;
		@apply z-50 fixed top-0 left-0 h-1 w-full;

		.progress-sliver {
			width: var(--width);
			@apply bg-primary h-full;
		}
	}
</style>
