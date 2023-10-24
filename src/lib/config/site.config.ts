export const siteConfig = {
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

export type SiteConfig = typeof siteConfig;

export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	// icon?: keyof typeof Icons;
	label?: string;
};

interface DocsConfig {
	mainNav: NavItem[];
	// sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'about',
			href: '/about'
		},
		{
			title: 'login',
			href: '/auth'
		}
	]
};

type Example = {
	name: string;
	href: string;
	label?: string;
	code: string;
};
export const examples: Example[] = [
	{
		name: 'Dashboard',
		href: '/examples/dashboard',
		code: 'https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/lib/components/docs/dashboard'
	},
	{
		name: 'Cards',
		href: '/examples/cards',
		code: 'https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/cards'
	},
	// {
	// 	name: "Tasks",
	// 	href: "/examples/tasks",
	// 	label: "New",
	// 	code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/apps/www/app/examples/tasks"
	// },
	{
		name: 'Playground',
		href: '/examples/playground',
		code: 'https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/playground'
	},
	{
		name: 'Music',
		href: '/examples/music',
		code: 'https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/music'
	},
	{
		name: 'Authentication',
		href: '/examples/authentication',
		code: 'https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/authentication'
	},
	{
		name: 'Forms',
		href: '/examples/forms',
		code: 'https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/forms'
	}
];
