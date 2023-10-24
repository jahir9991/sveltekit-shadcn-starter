<script>

	import Header from "$src/lib/layout/Header.svelte";
	import { playlists } from "$src/pages/dash/(data)/playlists";
	import Sidebar from "$src/pages/dash/sidebar.svelte";


</script>
<div class="relative flex min-h-screen flex-col" id="page">
	<Header />
	<div class="flex">
		<div class="w-[20%]">
		    <Sidebar {playlists} class="hidden lg:block" />
	     </div>
		<div class="flex-auto">
			<slot />
		</div>
	</div>
	
</div>
