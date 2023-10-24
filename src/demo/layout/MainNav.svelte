<script lang="ts">
	import { page } from "$app/stores";


	import { cn } from "$src/shadcn/utils";
	const siteConfig = {
	name: 'shadcn-svelte',
	url: 'https://shadcn-svelte.com',
	ogImage: 'https://shadcn-svelte.com/og.png',
	description: 'Beautifully designed components built with Melt UI and Tailwind CSS.',
	links: {
		twitter: 'https://twitter.com/huntabyte',
		github: 'https://github.com/huntabyte/shadcn-svelte',
		shadTwitter: 'https://twitter.com/shadcn',
		shadGithub: 'https://github.com/shadcn/ui'
	},
	keywords: `shadcn,Svelte,SvelteKit,Svelte Components,TailwindCSS,Melt UI,Bit UI`
};
	
	const  docsConfig:any = {
	mainNav: [
		{
			title: 'auth',
			href: '/demo/auth'
		},
		{
			title: 'dashboard',
			href: '/demo/dashboard'
		},{
			title: 'cards',
			href: '/demo/cards'
		},
		{
			title: 'podcast',
			href: '/demo/podcast'
		},
		{
			title: 'music',
			href: '/demo/music'
		},
		{
			title: 'tables',
			href: '/demo/tables'
		}
	]
};

</script>
<div class="mr-4 hidden md:flex">
	<a href="/demo" class="mr-6 flex items-center space-x-2">
		<!-- <Icons.logo class="h-6 w-6" /> -->
		<span class="hidden font-bold sm:inline-block">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center space-x-6 text-sm font-medium">
        
		{#each docsConfig.mainNav as navItem}
			<a
				href={navItem.href}
				class={cn(
					"transition-colors hover:text-foreground/80",
					$page.url.pathname.startsWith(navItem.href)
						? "text-foreground"
						: "text-foreground/60"
				)}
				target={navItem.external ? "_blank" : undefined}
				rel={navItem.external ? "noreferrer" : undefined}
			>
				{navItem.title}
			</a>
		{/each}
	</nav>
</div>
