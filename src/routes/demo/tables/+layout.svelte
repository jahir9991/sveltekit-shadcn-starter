<script>
	import TableLayoutPage from "$src/demo/pages/tables/table-layout-page.svelte";

</script>
<div class="container space-y-4 p-8 pt-6">

<TableLayoutPage></TableLayoutPage>
	<div class="bg-background h-full px-4 py-6 lg:px-8">
		<slot></slot>
	</div>
</div>