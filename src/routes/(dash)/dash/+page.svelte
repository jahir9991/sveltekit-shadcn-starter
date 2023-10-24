<script lang="ts">
	import { PlusCircled } from "radix-icons-svelte";
	
	import * as Tabs from "$src/shadcn/ui/tabs";
	
	import { playlists } from "$src/pages/dash/(data)/playlists";
	import { listenNowAlbums, madeForYouAlbums } from "$src/pages/dash/(data)/albums";
	import Menu from "$src/pages/dash/menu.svelte";
	import Sidebar from "$src/pages/dash/sidebar.svelte";
	import Button from "$src/shadcn/ui/button/button.svelte";
	import Separator from "$src/shadcn/ui/separator/separator.svelte";
	import AlbumArtwork from "$src/pages/dash/album-artwork.svelte";
	import PodcastEmptyPlaceholder from "$src/pages/dash/podcast-empty-placeholder.svelte";
	import Richtableview from "$src/pages/dash/richtableview.svelte";
	import Basictableview from "$src/pages/dash/basictableview.svelte";
</script>


<div class="md:block">
	<!-- <Menu /> -->
	<div class="border-t">
		<div class="bg-background">
			<div class="grid lg:grid-cols-5">
				<!-- <Sidebar {playlists} class="hidden lg:block" /> -->
				<div class="col-span-3 lg:col-span-5 lg:border-l">
					<div class="h-full px-4 py-6 lg:px-8">
						<Tabs.Root value="music" class="h-full space-y-6">
							<div class="space-between flex items-center">
								<Tabs.List>
									<Tabs.Trigger
										value="music"
										class="relative"
									>
										Music
									</Tabs.Trigger>
									<Tabs.Trigger value="podcasts"
										>Podcasts</Tabs.Trigger
									>
									<Tabs.Trigger value="basictable" 
										>Basic Table</Tabs.Trigger
									>
									<Tabs.Trigger value="richtable" 
										>Rich Table</Tabs.Trigger
									>
								</Tabs.List>
								<div class="ml-auto mr-4">
									<Button>
										<PlusCircled class="mr-2 h-4 w-4" />
										Add music
									</Button>
								</div>
							</div>
							<Tabs.Content
								value="music"
								class="border-none p-0 outline-none"
							>
								<div class="flex items-center justify-between">
									<div class="space-y-1">
										<h2
											class="text-2xl font-semibold tracking-tight"
										>
											Listen Now
										</h2>
										<p
											class="text-sm text-muted-foreground"
										>
											Top picks for you. Updated daily.
										</p>
									</div>
								</div>
								<Separator class="my-4" />
								<div class="relative">
									<div class="overflow-x-auto">
										<div class="flex space-x-4 pb-4">
											{#each listenNowAlbums as album}
												<AlbumArtwork
													{album}
													class="w-[250px]"
													aspectRatio="portrait"
													width={250}
													height={330}
												/>
											{/each}
										</div>
									</div>
								</div>
								<div class="mt-6 space-y-1">
									<h2
										class="text-2xl font-semibold tracking-tight"
									>
										Made for You
									</h2>
									<p class="text-sm text-muted-foreground">
										Your personal playlists. Updated daily.
									</p>
								</div>
								<Separator class="my-4" />
								<div class="relative">
									<div class="overflow-x-auto">
										<div class="flex space-x-4 pb-4">
											{#each madeForYouAlbums as album}
												<AlbumArtwork
													{album}
													class="w-[150px]"
													aspectRatio="square"
													width={150}
													height={150}
												/>
											{/each}
										</div>
									</div>
								</div>
							</Tabs.Content>
							<Tabs.Content
								value="podcasts"
								class="h-full flex-col border-none p-0 data-[state=active]:flex"
							>
								<div class="flex items-center justify-between">
									<div class="space-y-1">
										<h2
											class="text-2xl font-semibold tracking-tight"
										>
											New Episodes
										</h2>
										<p
											class="text-sm text-muted-foreground"
										>
											Your favorite podcasts. Updated
											daily.
										</p>
									</div>
								</div>
								<Separator class="my-4" />
								<PodcastEmptyPlaceholder />
							</Tabs.Content>
							<Tabs.Content
								value="basictable"
								class="h-full flex-col border-none p-0 data-[state=active]:flex"
							>
								<div class="flex items-center justify-between">
									<div class="space-y-1">
										<h2
											class="text-2xl font-semibold tracking-tight"
										>
											Basic table
										</h2>
										<p
											class="text-sm text-muted-foreground"
										>
											Your favorite podcasts. Updated
											daily.
										</p>
									</div>
								</div>
								<Separator class="my-4" />
								<Basictableview></Basictableview>
								
							</Tabs.Content>
							<Tabs.Content
								value="richtable"
								class="h-full flex-col border-none p-0 data-[state=active]:flex"
							>
								<div class="flex items-center justify-between">
									<div class="space-y-1">
										<h2
											class="text-2xl font-semibold tracking-tight"
										>
											Rich table
										</h2>
										<p
											class="text-sm text-muted-foreground"
										>
											Your favorite podcasts. Updated
											daily.
										</p>
									</div>
								</div>
								<Separator class="my-4" />
								<Richtableview></Richtableview>
								
							</Tabs.Content>
						</Tabs.Root>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>