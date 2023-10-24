<script lang="ts">
	import { cn } from "$src/shadcn/utils";
	import { buttonVariants } from "$src/shadcn/ui/button";
	import MainNav from "./MainNav.svelte";
	import * as Avatar from "$src/shadcn/ui/avatar";

</script>

<header
	class="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur"
>
	<div class="container flex h-14 items-center">
		<MainNav></MainNav>
		<div
			class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end"
		>
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<!-- Command Menu Here -->
			</div>
			<nav class="flex items-center space-x-1">
				<a
					href='/dash'
					rel="noreferrer"
				>
					<div
						class={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost"
							}),
							"w-9 px-0"
						)}
					>
						<Avatar.Root>
							<Avatar.Image src={'/favicon.png'} />
							<Avatar.Fallback
								>name</Avatar.Fallback
							>
						</Avatar.Root>
						<span class="sr-only">Account</span>
					</div>
				</a>
				
			</nav>
		</div>
	</div>
</header>
