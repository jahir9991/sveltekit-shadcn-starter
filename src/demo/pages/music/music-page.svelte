<script lang="ts">

	import Separator from "$src/shadcn/ui/separator/separator.svelte";
	import AlbumArtwork from "$src/demo/pages/music/album-artwork.svelte";
	import { listenNowAlbums, madeForYouAlbums, type Album } from "$src/demo/data";
	import PageTitle from "$src/demo/layout/page-title.svelte";
	import * as  Dialog  from "$src/shadcn/ui/dialog";
	import { hero } from "$src/lib/hero-action";
	import { onMount, tick } from "svelte";
	import { page,navigating } from "$app/stores";
	import postcss from "postcss";

    let isopen=false;

	const onOpenChange=(p)=>{
		console.log(p);
		isopen=false;
	}

    let currentData:Album;


    const onOpen=(album)=>{
        currentData=album;
        isopen=true;
    }

    let delay=false;

    onMount(async ()=>{
        
        if($navigating?.from?.route.id=='/demo/music/[id]'){
            delay=true;

       
        }else{
            setTimeout(() => {
            delay=true;
            });
        }
        
    
    })

</script>
<section>
    <PageTitle title="Music"></PageTitle>

</section>
<section class="relative ">
    <div class="overflow-x-auto">
        <div class="flex space-x-4 pb-4">
            {#each listenNowAlbums as album ,index}
            <a href={'/demo/music/'+album.id} use:hero={delay?album.id+'-music':null}>

                <AlbumArtwork
                    {album}
                    class="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                />
            </a>
                
            {/each}
        </div>
    </div>
</section>
<section class="mt-6 space-y-1">
    <h2
        class="text-2xl font-semibold tracking-tight"
    >
        Made for You
    </h2>
    <p class="text-sm text-muted-foreground">
        Your personal playlists. Updated daily.
    </p>
</section>
<Separator class="my-4" />
<section class="relative px-0 md:px-8">
    <div class="overflow-x-auto">
        <div class="flex space-x-4 pb-4">
            {#each madeForYouAlbums as album}
            <button  on:click={()=>onOpen(album)} use:hero={delay?album.id+'-model':null}>
                <AlbumArtwork
               
                    {album}
                    class="w-[150px]"
                    aspectRatio="square"
                    width={150}
                    height={150}
                />
            </button>

        
            {/each}
        </div>
    </div>
</section>

<Dialog.Root  open={isopen} onOpenChange={onOpenChange} >
	<Dialog.Content  class="p-0 ">
        <img  use:hero={currentData.id+'-model'}  src={currentData.cover} alt="">
	</Dialog.Content>
</Dialog.Root>


<style lang=postcss>



</style>