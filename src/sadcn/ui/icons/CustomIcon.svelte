<script lang="ts">
	import type { CustomIconType } from './cutomIconData';
	import { CustomIconData } from './cutomIconData';
	export let color = '#fff';
	export let stroke = color;
	export let filled: boolean = false;
	export let fillColor: string = filled ? color : 'none';
	export let size: number = 1.5; // default 1em match the parent element
	export let icon: CustomIconType = 'heart';
	export let classes: string = '';
	export let strokeWidth: number = 0.5;
</script>

<svg
	class="icon {classes}"
	viewBox="0 0 24 24"
	fill={fillColor}
	width={size + 'em'}
	height={size + 'em'}
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d={CustomIconData[icon]}
		{stroke}
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"><slot /></path
	>
</svg>

<style>
	.icon {
		position: relative;
		display: inline-block;
	}
</style>
