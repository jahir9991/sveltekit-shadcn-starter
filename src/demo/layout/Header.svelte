<script lang="ts">
	import MainNav from "./MainNav.svelte";
	import Search from "$src/demo/layout/search.svelte";
	import UserNav from "$src/demo/layout/user-nav.svelte";

</script>

<header
	class="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20 w-full border-b bg-background/95 shadow-sm backdrop-blur"
>
	<div class="container flex h-14 items-center">
		<MainNav></MainNav>
		<div
			class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end"
		>
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<!-- Command Menu Here -->
			</div>
			
			
				<div class="ml-auto flex items-center space-x-4">
					<Search />
					<UserNav />
				</div>
				
		
		</div>
	</div>
</header>


<style>
	header{
		view-transition-name: header;
	}
</style>
