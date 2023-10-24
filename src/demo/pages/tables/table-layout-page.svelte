<script lang="ts">
	
	import * as Tabs from "$src/shadcn/ui/tabs";
	
	
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import PageTitle from "$src/demo/layout/page-title.svelte";
</script>


		<PageTitle title="Tables"></PageTitle>
		<Tabs.Root value="overview" class="space-y-4">
			<Tabs.List>
				<Tabs.Trigger 
				on:click={()=>{goto('/demo/tables')}}
				data-state={$page.url.pathname=='/demo/tables'? 'active':''}

				value="tables">Basic Table</Tabs.Trigger>
				<Tabs.Trigger 
				on:click={()=>{goto('/demo/tables/richtable')}}
				data-state={$page.url.pathname=='/demo/tables/richtable'? 'active':''}
				value="richtable" >Rich table</Tabs.Trigger
				>
				
			</Tabs.List>
			
		</Tabs.Root>


		


