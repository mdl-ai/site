<script>
	import Sidebar from './Sidebar.svelte';
	import Stack from '../svg/Stack.svelte';
	import Branch from './../svg/Branch.svelte';
	import Home from './../svg/Home.svelte';
	import { display } from '../stores.js';
</script>

<div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
	<!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
	<div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />

	<!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
	<div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
		<!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
		<!-- <div class="absolute top-0 right-0 -mr-12 pt-2">
			<button
				on:click={() => {
					$display.sidebar = !$display.sidebar;
				}}
				type="button"
				class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
			>
				<span class="sr-only">Close sidebar</span>
				<svg
					class="h-6 w-6 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button> -->
		<Sidebar />
	</div>
</div>

<!-- <div class="flex-shrink-0 w-14" aria-hidden="true">
	</div>
</div> -->
