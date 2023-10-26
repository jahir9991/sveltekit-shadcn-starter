<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	import * as Dialog from ".";
	import { cn, flyAndScale } from "$shadcn/utils";
	import { Cross2 } from "radix-icons-svelte";
	import CustomIcon from "../icons/CustomIcon.svelte";

	type $$Props = DialogPrimitive.ContentProps;

	let className: $$Props["class"] = undefined;
	export let transition: $$Props["transition"] = flyAndScale;
	export let transitionConfig: $$Props["transitionConfig"] = {
		duration: 200
	};
	export { className as class };
</script>

<Dialog.Portal>
	<Dialog.Overlay />
	<DialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg md:w-full overflow-hidden",
			className
		)}
		{...$$restProps}
	>
		<slot />
		<DialogPrimitive.Close
			class="absolute right-4 top-4 focus:none  opacity-40 hover:opacity-100"
		>
			<CustomIcon icon="close"  filled  classes="transition-all text-primary bg-white rounded-full h-6 w-6 p-1 hover:rotate-90 hover:scale-150"></CustomIcon>
			<span class="sr-only">Close</span>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</Dialog.Portal>
