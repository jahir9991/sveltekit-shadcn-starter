<script lang="ts">
	import {  writable } from "svelte/store";
	
	import { CaretSort, ChevronDown } from "radix-icons-svelte";
	import * as DropdownMenu from "$shadcn/ui/dropdown-menu";
	
	
	import { cn } from "$src/shadcn/utils";
	import Button from "$src/shadcn/ui/button/button.svelte";
	import DataTableActions from "./data-table/dataTableActions.svelte";
	import * as Table from "$src/shadcn/ui/table";
	import DataTableCheckbox from "./data-table/dataTableCheckbox.svelte";
	import Input from "$src/shadcn/ui/input/input.svelte";
	import CustomIcon from "$src/shadcn/ui/icons/CustomIcon.svelte";
  
	type Payment = {
	  id: string;
	  amount: number;
	  status: "Pending" | "Processing" | "Success" | "Failed";
	  email: string;
	};
  
	const data: Payment[] = [
	  {
		id: "m5gr84i9",
		amount: 316,
		status: "Success",
		email: "ken99@yahoo.com"
	  },
	  {
		id: "3u1reuv4",
		amount: 242,
		status: "Success",
		email: "Abe45@gmail.com"
	  },
	  {
		id: "derv1ws0",
		amount: 837,
		status: "Processing",
		email: "Monserrat44@gmail.com"
	  },
	  {
		id: "5kma53ae",
		amount: 874,
		status: "Success",
		email: "Silas22@gmail.com"
	  },
	  {
		id: "bhqecj4p",
		amount: 721,
		status: "Failed",
		email: "carmella@hotmail.com"
	  }
	];
  

	
  

  
	
  
	// const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	let filterValue  = "";
  
  
	const hideableCols = ["status", "email", "amount"];


	let checked =writable(true);
  </script>
  
  <div class="w-full">
	<div class="mb-4 flex items-center gap-4">
	  <Input
		class="max-w-sm"
		placeholder="Filter emails..."
		type="text"
		bind:value={filterValue}
	  />
	
	  
	  <DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
		  <Button variant="outline" builders={[builder]}>Open
			<ChevronDown class="ml-2 h-4 w-4" />
		</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56">
		  <DropdownMenu.Label>

			<div class="flex">
				<span class="p-2 bg-primary">
					<CustomIcon icon="search"  color="white" strokeWidth={2}></CustomIcon>

				</span>
			<Input
			class="inline-block border-none focus-visible:border-none!"
			placeholder="search"
			type="text"
			bind:value={filterValue}
		  />

			</div>
			

			
		  </DropdownMenu.Label>
		  <DropdownMenu.Separator />
		  <DropdownMenu.CheckboxItem >
			Status Bar
		  </DropdownMenu.CheckboxItem>
		  <DropdownMenu.CheckboxItem >
			Activity Bar
		  </DropdownMenu.CheckboxItem>
		  <DropdownMenu.CheckboxItem >
			Panel
		  </DropdownMenu.CheckboxItem>
		</DropdownMenu.Content>
	  </DropdownMenu.Root>
	</div>
	<div class="rounded-md border">

		<Table.Root >
			<Table.Header>
				<Table.Row>
					<Table.Head	class={cn("[&:has([role=checkbox])]:pl-3 text-center")}>
						<div class="text-center font-medium">
							<DataTableCheckbox checked={checked}></DataTableCheckbox>
						  </div>
						
				</Table.Head>
				<Table.Head	class={cn("[&:has([role=checkbox])]:pl-3 text-center")}>
					<Button variant="ghost" class="text-center" >
						
						status
						<CaretSort
							class={cn(
							   "text-foreground",
							  "ml-2 h-4 w-4"
							)}
						  />
					  </Button>
						
				</Table.Head>
				<Table.Head	class={cn("[&:has([role=checkbox])]:pl-3 text-center")}>
					<Button variant="ghost" class="text-center" >
						
						email
						<CaretSort
							class={cn(
							   "text-foreground",
							  "ml-2 h-4 w-4"
							)}
						  />
					  </Button>
						
				</Table.Head>
				<Table.Head	class={cn("[&:has([role=checkbox])]:pl-3 text-center")}>
					<Button variant="ghost" class="text-center" >
						
						amount
					  </Button>
						
				</Table.Head>
				<Table.Head	class={cn("[&:has([role=checkbox])]:pl-3 text-center")}>
					
						
				</Table.Head>

				</Table.Row>
			</Table.Header>
			<Table.Body>

				{#each data as item (item.id)}
					 <!-- content here -->
				<Table.Row>
					<Table.Cell class="[&:has([role=checkbox])]:pl-3">
						<div class="text-center font-medium">
							<DataTableCheckbox checked={checked}></DataTableCheckbox>
						  </div>
					</Table.Cell>
					<Table.Cell class="[&:has([role=checkbox])]:pl-3">
						<div class="text-center font-medium">
							{item.status}
						  </div>
					</Table.Cell>
					<Table.Cell class="[&:has([role=checkbox])]:pl-3">
						<div class="text-center font-medium">
							{item.email}
						  </div>
					</Table.Cell>
					<Table.Cell class="[&:has([role=checkbox])]:pl-3">
						<div class="text-center font-medium">
							{item.amount}
						  </div>
					</Table.Cell>
					<Table.Cell class="[&:has([role=checkbox])]:pl-3">
						<div class="text-center font-medium">
							<DataTableActions id="90"></DataTableActions>
						  </div>
					</Table.Cell>

				</Table.Row>
				{/each}

				

			</Table.Body>


		</Table.Root>



	</div>
	<div class="flex items-center justify-end space-x-2 py-4">
	  <div class="flex-1 text-sm text-muted-foreground">
		{5} of{" "}
		{5} row(s) selected.
	  </div>
	  <Button
		variant="outline"
		size="sm"
		
		>Previous</Button
	  >
	  <Button
		variant="outline"
		size="sm"
		>Next</Button
	  >
	</div>
  </div>