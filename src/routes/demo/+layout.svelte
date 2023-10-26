<script>
	import '../../app.postcss';
	import '../../styles.postcss';

	import Header from "$src/demo/layout/Header.svelte";
	import Sidebar from "$src/demo/layout/sidebar.svelte";
	import PageLoader from '$src/demo/layout/PageLoader.svelte';
	import PageFooter from '$src/demo/layout/PageFooter.svelte';
	

</script>

<div class="app">
	
	<div class="relative flex min-h-screen flex-col" id="page">
		<Header />
		<div class="flex">
			<div class="hidden w-[20%]">
				<Sidebar  class="hidden lg:block" />
			 </div>
			 <PageLoader>
					<main class=" flex-auto ">
						<slot />	
					</main>
			</PageLoader>

		</div>
		<PageFooter></PageFooter>
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}	

	main{
		min-height: calc(100vh - var(--header-hight))
	}
</style>
