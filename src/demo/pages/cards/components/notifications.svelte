<script lang="ts">
	
	import * as Card from "$src/shadcn/ui/card";
	import CustomIcon from "$src/shadcn/ui/icons/CustomIcon.svelte";

</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Notifications</Card.Title>
		<Card.Description>
			Choose what you want to be notified about.
		</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-1 p-1.5">
		<div
			class="flex items-center space-x-4 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
		>
			
			<CustomIcon icon="bell" classes="h-5 w-5"></CustomIcon>

			<div class="space-y-1">
				<p class="text-sm font-medium leading-none">Everything</p>
				<p class="text-sm text-muted-foreground">
					Email digest, mentions & all activity.
				</p>
			</div>
		</div>
		<div
			class="flex items-center space-x-4 rounded-md bg-accent p-2 text-accent-foreground"
		>
			
			<CustomIcon icon="at-symbol" classes="h-5 w-5"></CustomIcon>
			<div class="space-y-1">
				<p class="text-sm font-medium leading-none">Available</p>
				<p class="text-sm text-muted-foreground">
					Only mentions and comments.
				</p>
			</div>
		</div>
		<div
			class="flex items-center space-x-4 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
		>
			<CustomIcon icon="bell-off" classes="h-5 w-5"></CustomIcon>

			<div class="space-y-1">
				<p class="text-sm font-medium leading-none">Ignoring</p>
				<p class="text-sm text-muted-foreground">
					Turn off all notifications.
				</p>
			</div>
		</div>
	</Card.Content>
</Card.Root>
