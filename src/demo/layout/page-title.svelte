<script>

	import Button from "$src/shadcn/ui/button/button.svelte";
	import CustomIcon from "$src/shadcn/ui/icons/CustomIcon.svelte";

    export let title='Dashboard';
    export let subTitle='Your personal playlists. Updated daily.';

</script>
<div class="flex items-center justify-between space-y-2">
    <div>

    <h2 class="text-3xl font-bold tracking-tight">{title}</h2>
    <p class="text-sm text-muted-foreground">
        
        {subTitle}
    </p>
    </div>

    <div class="flex items-center space-x-2">
        <Button size="sm">
            <CustomIcon icon=download classes="mr-2 h-4 w-4" strokeWidth={2}></CustomIcon>
            Download
        </Button>
    </div>
</div>
