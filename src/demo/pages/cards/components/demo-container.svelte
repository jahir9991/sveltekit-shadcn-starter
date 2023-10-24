<script lang="ts">
	import { cn } from "$src/shadcn/utils";



	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div
	class={cn("flex items-center justify-center [&>div]:w-full", className)}
	{...$$restProps}
>
	<slot />
</div>
