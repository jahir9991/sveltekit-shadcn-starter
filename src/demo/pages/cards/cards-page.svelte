<script lang="ts">
	import PageTitle from "$src/demo/layout/page-title.svelte";
import {
		CardsCookieSettings,
		CardsCreateAccount,
		CardsPaymentMethod,
		CardsShare,
		CardsReportIssue,
		CardsGithub,
		CardsNotifications,
		DemoContainer
	} from "./components";
</script>


    <PageTitle></PageTitle>





<div
	class=" items-start justify-center gap-6 rounded-lg  md:grid lg:grid-cols-2 xl:grid-cols-3"
>
	<div class="col-span-3 grid items-start gap-6 lg:col-span-1">
		<DemoContainer>
			<CardsCreateAccount />
		</DemoContainer>
		<DemoContainer>
			<CardsPaymentMethod />
		</DemoContainer>
	</div>
	<div class="col-span-2 grid items-start gap-6 lg:col-span-1">
		<DemoContainer>
			<CardsShare />
		</DemoContainer>
		<DemoContainer>
			<CardsNotifications />
		</DemoContainer>
		<DemoContainer>
			<CardsCookieSettings />
		</DemoContainer>
	</div>
	<div
		class="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1"
	>
		<DemoContainer>
			<CardsReportIssue />
		</DemoContainer>
		<DemoContainer>
			<CardsGithub />
		</DemoContainer>
	</div>
</div>
