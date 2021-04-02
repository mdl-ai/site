<script>
	import { display } from './../stores.js';
	import Id from './../svg/Id.svelte';
	import Search from './../svg/Search.svelte';
	import Adjust from './../svg/Adjust.svelte';
</script>

<div class="relative z-10 flex flex-shrink-0 h-16 bg-color shadow">
	<button
		on:click={() => ($display.sidebar = !$display.sidebar)}
		type="button"
		class="px-4 text-color border-r border-gray-400 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
	>
		<span class="sr-only">Open sidebar</span>
		<!-- Heroicon name: outline/menu-alt-2 -->
		<svg
			class="w-6 h-6"
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
				d="M4 6h16M4 12h16M4 18h7"
			/>
		</svg>
	</button>

	<div class="flex justify-between flex-1 px-4">
		<div class="flex flex-1" />
		<div class="flex items-center ml-4 md:ml-6">
			<button class="navbar-btn" on:click={() => ($display.dark = !$display.dark)}>
				<span class="pr-3 text-color">Dark Mode</span>
				<Adjust />
			</button>

			<!-- Profile dropdown -->
			<div class="relative ml-3">
				<div>
					<button
						type="button"
						class="navbar-btn"
						id="user-menu"
						aria-expanded="false"
						aria-haspopup="true"
						on:click={() => ($display.profile = !$display.profile)}
					>
						<span class="mr-2 text-color">Login</span>
						<Id />
					</button>
				</div>

				<!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
				{#if $display.profile}
					<div
						class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-color rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu"
					>
						<a href="#" class="block px-4 py-2 text-sm bg-color text-color" role="menuitem"
							>Coming soon..</a
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
