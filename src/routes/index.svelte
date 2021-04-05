<script>
	import { fly } from 'svelte/transition';
	import Models from '$lib/Models.svelte';
	import HomePage from './../lib/HomePage.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import OffCanvas from '$lib/OffCanvas.svelte';
	import { display } from './../stores.js';
	import Sidebar from '$lib/Sidebar.svelte';
	import Technologies from '$lib/Technologies.svelte';
	import { onMount } from 'svelte';
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
</script>

<body class="">
	<div class="h-screen flex overflow-hidden bg-color">
		<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
		<!-- {#if $display.sidebar}
			<OffCanvas />
		{/if} -->
		<!-- Static sidebar for desktop -->
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
