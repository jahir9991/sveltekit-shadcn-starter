<script>
	import '../../app.postcss';
	import '../../styles.css';

	import Header from "$src/demo/layout/Header.svelte";
	import Sidebar from "$src/demo/layout/sidebar.svelte";
	

</script>

<div class="app">

	<div class="relative flex min-h-screen flex-col" id="page">
		<Header />
		<div class="flex">
			<div class="hidden w-[20%]">
				<Sidebar  class="hidden lg:block" />
			 </div>
			<div class="container flex-auto space-y-4 p-8 pt-6">
				<slot />
			</div>
		</div>
		
	</div>


	


</div>













<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}	
</style>
