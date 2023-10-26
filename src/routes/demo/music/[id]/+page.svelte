<script lang=ts>
	import { page } from '$app/stores';
	import type { Album } from '$src/demo/data';
	import AlbumArtwork from '$src/demo/pages/music/album-artwork.svelte';
	import { hero } from '$src/lib/hero-action';
	import { cn } from '$src/shadcn/utils';
	import { onMount } from 'svelte';


export let data:Album;

onMount(()=>{
    console.log(data);
});



</script>

<div class="container space-y-4 p-8 pt-6">


<div class="h-60 w-60"   use:hero={data.id+'-music'}>

    <AlbumArtwork
    album={data}
    class="w-[250px]"
    aspectRatio="portrait"
    width={250}
    height={330}
/>


   
</div>
</div>




