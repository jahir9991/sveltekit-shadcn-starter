<script>

	import Button from "$src/shadcn/ui/button/button.svelte";
	import { Download } from "lucide-svelte";

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
            <Download class="mr-2 h-4 w-4" />
            Download
        </Button>
    </div>
</div>
