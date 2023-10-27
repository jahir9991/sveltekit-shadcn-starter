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
			title: 'Auth',
			href: '/demo/auth'
		},
		{
			title: 'Dashboard',
			href: '/demo/dashboard'
		},{
			title: 'Cards',
			href: '/demo/cards'
		},
		{
			title: 'Podcast',
			href: '/demo/podcast'
		},
		{
			title: 'Music',
			href: '/demo/music'
		},
		{
			title: 'Tables',
			href: '/demo/tables'
		},
		{
			title: 'Counter',
			href: '/demo/counter'
		}
	]
};

</script>
<div class="mr-4 md:flex  w-full py-2 overflow-y-scroll scrollbar-hide">
	<a href="/demo" class="mr-6 flex items-center space-x-2">
		<!-- <Icons.logo class="h-6 w-6" /> -->
		<span class="hidden font-bold sm:inline-block">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center mx-2 space-x-6 text-sm font-medium">
        
		{#each docsConfig.mainNav as navItem}
			<a
				href={navItem.href}
				class={cn(
					"nav-item ",
					$page.url.pathname.startsWith(navItem.href)
						? "text-foreground active"
						: "text-foreground/60",

				)}
				target={navItem.external ? "_blank" : undefined}
				rel={navItem.external ? "noreferrer" : undefined}
			>
				{navItem.title}
			
			</a>
		{/each}
		
	</nav>
</div>


<style lang=postcss>
	.nav-item{
		@apply   text-center py-2 px-1  transition-colors hover:text-primary/80;
	}
	.active  {
		
		
		position: relative;
		
		&:after{
			@apply bg-primary w-full  h-1 bottom-0 absolute  m-auto left-0 right-0  rounded-lg ;
	content: '';
  view-transition-name:indicator;
}
	}
	
</style>