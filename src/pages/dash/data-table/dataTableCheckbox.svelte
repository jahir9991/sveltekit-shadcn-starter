<script lang="ts">
	import Checkbox from "$src/shadcn/ui/checkbox/checkbox.svelte";

	import type { Writable } from "svelte/store";

	export let checked: Writable<boolean>;
</script>

<Checkbox bind:checked={$checked} />