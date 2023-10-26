<script lang="ts">

	
	import { Label } from '$shadcn/ui/label';
	import Button from '$shadcn/ui/button/button.svelte';
	import CustomIcon from '$shadcn/ui/icons/CustomIcon.svelte';
	import Input from '$shadcn/ui/input/input.svelte';
	import { cn } from '$shadcn/utils';
	import { goto } from '$app/navigation';
	

	let className: string | undefined | null = undefined;
	export { className as class };

	let isLoading = false;
	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
			goto('/demo/dashboard')
		}, 3000);
	}
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form on:submit|preventDefault={onSubmit}>
		<div class="grid gap-2">

			
			<div class="grid gap-2">
				<Label class="" for="email">Email</Label>
				<Input
					id="email"
					placeholder="name@example.com"
					type="email"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={isLoading}
				/>
			</div>
			<div class="grid gap-2">
				<Label  for="password">Password</Label>
				<Input
					id="password"
					placeholder="password"
					type="password"
					disabled={isLoading}
				/>
			</div>
			

			<Button disabled={isLoading}>
				{#if isLoading}
					<CustomIcon icon="spin" filled strokeWidth={.2} classes="mr-2 h-4 w-4 animate-spin" />
				{/if}
				
				Sign In with Email
			</Button>
		</div>
	</form>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" />
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
		</div>
	</div>
	<Button variant="outline" type="button" disabled={isLoading}>
		{#if isLoading}
			<iconify-icon icon="mdi:loading" class="text-cyan-900 mr-2 h-4 w-4 animate-spin" />
		{:else}
			<!-- <Icons.gitHub class="mr-2 h-4 w-4" /> -->
			<iconify-icon icon="xli:github" class="mr-2 h-4 w-4" />
		{/if}
		{' '}
		Github
	</Button>
</div>
