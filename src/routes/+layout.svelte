<script>
	import '../app.postcss';
	import '../styles.css';

</script>

<div class="app">


		<slot />


</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}	
</style>
