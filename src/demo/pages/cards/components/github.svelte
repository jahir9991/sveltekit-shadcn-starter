<script lang="ts">
	import Button from "$src/shadcn/ui/button/button.svelte";
	import * as Card from "$src/shadcn/ui/card";
	import CustomIcon from "$src/shadcn/ui/icons/CustomIcon.svelte";
	import Input from "$src/shadcn/ui/input/input.svelte";
	import Label from "$src/shadcn/ui/label/label.svelte";
	import Switch from "$src/shadcn/ui/switch/switch.svelte";
	import Separator from "$src/shadcn/ui/separator/separator.svelte";
	import * as DropdownMenu  from "$src/shadcn/ui/dropdown-menu";
	
</script>

<Card.Root>
	<Card.Header class="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
		<div class="space-y-1">
			<Card.Title>shadcn/ui</Card.Title>
			<Card.Description>
				Beautifully designed components built with Radix UI and Tailwind
				CSS.
			</Card.Description>
		</div>
		<div
			class="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground"
		>
			<Button variant="secondary" class="px-3 shadow-none">
				<!-- <Star class="mr-2 h-4 w-4" /> -->
				<CustomIcon icon=star classes="mr-2"></CustomIcon>
				Star
			</Button>
			<Separator orientation="vertical" class="h-[20px]" />
			<DropdownMenu.Root positioning={{ placement: "bottom-end" }}>
				<DropdownMenu.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="secondary"
						class="px-2 shadow-none"
						
					>
						
						<CustomIcon icon="chevron-down" strokeWidth={2} classes="h-4 w-4 text-secondary-foreground"></CustomIcon>

					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-[200px]">
					<DropdownMenu.Label>Suggested Lists</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.CheckboxItem checked>
						Future Ideas
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem
						>My Stack</DropdownMenu.CheckboxItem
					>
					<DropdownMenu.CheckboxItem
						>Inspiration</DropdownMenu.CheckboxItem
					>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						
						<CustomIcon icon=plus classes="mr-2 "></CustomIcon>

						
						Create List
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</Card.Header>
	<Card.Content>
		<div class="flex space-x-4 text-sm text-muted-foreground">
			<div class="flex items-center">
				<CustomIcon icon="x-circle" classes="mr-1 h-3 w-3 fill-sky-400 text-sky-400"></CustomIcon>

				TypeScript
			</div>
			<div class="flex items-center">
				<CustomIcon icon="star" classes="mr-1 h-4 w-4"></CustomIcon>
				20k
			</div>
			<div>Updated April 2023</div>
		</div>
	</Card.Content>
</Card.Root>
