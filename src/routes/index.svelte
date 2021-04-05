<script>
	import Models from '$lib/Models.svelte';
	import HomePage from './../lib/HomePage.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { display } from './../stores.js';
	import Sidebar from '$lib/Sidebar.svelte';
	import Technologies from '$lib/Technologies.svelte';
</script>

<body class="">
	<div class="h-screen flex overflow-hidden bg-color">
		<Sidebar />
		<div class="flex flex-col w-0 flex-1 overflow-hidden ">
			<Navbar />
			<main class="flex-1 relative overflow-y-auto focus:outline-none" tabindex="0">
				<div class="py-6">
					{#if $display.main === 'tech'}
						<Technologies />
					{:else if $display.main === 'home'}
						<HomePage />
					{:else if $display.main === 'models'}
						<Models />
					{:else if $display.main === 'lighthouse'}
						<div class="flex items-center flex-col">
							<h1 class="text-color p-2">Googles lighthouse tool measures web performance, it doesn't get any better than this!</h1>
							<img src="/lighthouse.png" class="border-indigo-500 border-4 border-dotted" alt="Lighthouse Perfect Score" />
						</div>
					{/if}
				</div>
			</main>
		</div>
	</div>
</body>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
