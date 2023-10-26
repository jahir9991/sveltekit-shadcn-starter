<script lang="ts">
	import MainNav from "./MainNav.svelte";
	import Search from "$src/demo/layout/search.svelte";
	import UserNav from "$src/demo/layout/user-nav.svelte";

</script>

<header
	class=" supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20 w-full border-b bg-background/95 shadow-sm backdrop-blur"
>
	<div class="md:container h-full  flex  items-center">
		<MainNav></MainNav>
			<Search />
			<UserNav />
		
	</div>
</header>


<style>
	header{
		view-transition-name: header;
		height:var(--header-hight);
	}
</style>
