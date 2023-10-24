export type Album = {
	name: string;
	artist: string;
	cover: string;
};

export const listenNowAlbums: Album[] = [
	{
		name: 'React Rendezvous',
		artist: 'Ethan Byte',
		cover: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80'
	},
	{
		name: 'Async Awakenings',
		artist: 'Nina Netcode',
		cover: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80'
	},
	{
		name: 'The Art of Reusability',
		artist: 'Lena Logic',
		cover: 'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80'
	},
	{
		name: 'Stateful Symphony',
		artist: 'Beth Binary',
		cover: 'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80'
	}
];

export const madeForYouAlbums: Album[] = [
	{
		name: 'Thinking Components',
		artist: 'Lena Logic',
		cover: 'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80'
	},
	{
		name: 'Functional Fury',
		artist: 'Beth Binary',
		cover: 'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80'
	},
	{
		name: 'React Rendezvous',
		artist: 'Ethan Byte',
		cover: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80'
	},
	{
		name: 'Stateful Symphony',
		artist: 'Beth Binary',
		cover: 'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80'
	},
	{
		name: 'Async Awakenings',
		artist: 'Nina Netcode',
		cover: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80'
	},
	{
		name: 'The Art of Reusability',
		artist: 'Lena Logic',
		cover: 'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80'
	}
];

export type Playlist = (typeof playlists)[number];

export const playlists = [
	'Recently Added',
	'Recently Played',
	'Top Songs',
	'Top Albums',
	'Top Artists',
	'Logic Discography',
	'Bedtime Beats',
	'Feeling Happy',
	'I miss Y2K Pop',
	'Runtober',
	'Mellow Days',
	'Eminem Essentials'
];

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
