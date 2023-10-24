<script lang="ts">
	import Button from "$src/shadcn/ui/button/button.svelte";
	import * as Card from "$src/shadcn/ui/card";
	import CustomIcon from "$src/shadcn/ui/icons/CustomIcon.svelte";
	import Input from "$src/shadcn/ui/input/input.svelte";
	import Label from "$src/shadcn/ui/label/label.svelte";
	import Switch from "$src/shadcn/ui/switch/switch.svelte";
</script>

<Card.Root>
	<Card.Header class="space-y-1">
		<Card.Title class="text-2xl">Create an account</Card.Title>
		<Card.Description>
			Enter your email below to create your account
		</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="grid grid-cols-2 gap-6">
			<Button variant="outline">
				<CustomIcon ></CustomIcon>
				Github
			</Button>
			<Button variant="outline">
				<CustomIcon ></CustomIcon>
				Google
			</Button>
		</div>
		<div class="relative">
			<div class="absolute inset-0 flex items-center">
				<span class="w-full border-t" />
			</div>
			<div class="relative flex justify-center text-xs uppercase">
				<span class="bg-card px-2 text-muted-foreground">
					Or continue with
				</span>
			</div>
		</div>
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input id="email" type="email" placeholder="m@example.com" />
		</div>
		<div class="grid gap-2">
			<Label for="password">Password</Label>
			<Input id="password" type="password" />
		</div>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full">Create account</Button>
	</Card.Footer>
</Card.Root>
