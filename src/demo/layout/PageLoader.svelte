<script lang=ts>

	import { beforeNavigate, onNavigate } from '$app/navigation';
	// import { _ } from '$src/utils/function';
	import ProgressTopbar from './ProgressTopbar.svelte';
	// import InfiniteLoader from './loaders/InfiniteLoader.svelte';
	
	

		beforeNavigate(({from,to})=>{
			try {
				if(from?.route.id==to.route.id){
							key=Math.random();
							window.scroll({top: 0,});
						}
			} catch (error) {
				console.log(error);
				
			}
			
		});
		

        onNavigate(async (navigation) => {
			
			if (!document["startViewTransition"]) {
				return;
			}

		return new Promise((oldStateCaptureResolve) => {
				document["startViewTransition"](async () => {
					oldStateCaptureResolve();
					await navigation.complete;
				});
			});
		});
	
	
let  key=Math.random();


</script>


       <ProgressTopbar/>


{#key key } 
	<slot />

{/key}

<style>

	

		@keyframes fade-in {
			from {
			opacity: 0;
			}
		}

@keyframes fade-out {
	to {
		opacity: 0;
	}
}

@keyframes slide-from-right {
	from {
		transform: translateY(30px);
	}
}

@keyframes slide-to-left {
	to {
		transform: translateY(-30px);
	}
}

:root::view-transition-old(root)  {
	animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
}

:root::view-transition-new(root) {
	animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 300ms cubic-bezier(0.4, 0, 0.2, 1) both
			slide-from-right;
}
</style>