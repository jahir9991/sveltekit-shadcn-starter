<script>

	import Separator from "$src/shadcn/ui/separator/separator.svelte";
	import AlbumArtwork from "$src/demo/pages/music/album-artwork.svelte";
	import { listenNowAlbums, madeForYouAlbums } from "$src/demo/data";
	import PageTitle from "$src/demo/layout/page-title.svelte";

</script>

		<PageTitle title="Music"></PageTitle>
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
