<script>
	import Navbar from '$lib/Navbar.svelte';
	import OffCanvas from '$lib/OffCanvas.svelte';
	import { display } from './../stores.js';
	import Sidebar from '$lib/Sidebar.svelte';
	import Technologies from '$lib/Technologies.svelte';
	import ProfileBanner from '$lib/ProfileBanner.svelte';
</script>

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<div class="h-screen flex overflow-hidden bg-gray-100">
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	{#if $display.sidebar}
		<OffCanvas />
	{/if}
	<!-- Static sidebar for desktop -->
	<Sidebar />
	<div class="flex flex-col w-0 flex-1 overflow-hidden">
		<Navbar />
		<main class="flex-1 relative overflow-y-auto focus:outline-none" tabindex="0">
			<div class="py-6">
				{#if $display.main === 'tech'}
					<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
						<h1 class="text-2xl font-semibold text-gray-900">Technology Stack</h1>
					</div>
					<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
						<Technologies />
					</div>
				{:else if $display.main === 'home'}
					<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
						<h1 class="text-2xl font-semibold text-gray-900">What we do</h1>
					</div>
					<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
						<h2 class="p-4">
							Rapid Development and deployment of unlimitedly scalabale AI web apps
						</h2>
						<h2 class="p-4">Get your model to market now in record time at minimal cost</h2>
						<h2 class="p-4">
							100% horizontally scalable platform, ready for when your business booms
						</h2>
					</div>
				{:else if $display.main === 'models'}
					<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
						<h1 class="text-2xl font-semibold text-gray-900">...Coming soon</h1>
					</div>
				{/if}
			</div>
		</main>
	</div>
</div>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
