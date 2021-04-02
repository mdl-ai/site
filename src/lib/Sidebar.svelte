<script>
	import LogoSmall from './../svg/LogoSmall.svelte';
	import Logo from '../svg/Logo.svelte';
	import Logo2 from '../svg/Logo2.svelte';
	import Branch from './../svg/Branch.svelte';
	import Home from './../svg/Home.svelte';
	import Stack from '../svg/Stack.svelte';
	import { display } from '../stores.js';
</script>

<div class="flex h-screen overflow-hidden ">
	<div class=" bg-gray-800 md:flex md:flex-shrink-0">
		<div class="flex flex-col ">
			<div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
				{#if $display.sidebar}
					<div class="px-5 pb-4">
						<Logo2 />
					</div>
					<nav class="flex-1 px-2 space-y-1">
						<button
							on:click={() => ($display.main = 'home')}
							class={$display.main === 'home' ? 'selected' : 'btn'}
						>
							<Home /> Home
						</button>
						<button
							on:click={() => ($display.main = 'tech')}
							class={$display.main === 'tech' ? 'selected' : 'btn'}
						>
							<Stack />
							Technologies
						</button>
						<button
							on:click={() => ($display.main = 'models')}
							class={$display.main === 'models' ? 'selected' : 'btn'}
						>
							<Branch />
							Models
						</button>
					</nav>
				{:else}
					<div class="pl-5 pb-4">
						<LogoSmall />
					</div>
					<nav class="px-2 space-y-1">
						<button
							on:click={() => ($display.main = 'home')}
							class={$display.main === 'home' ? 'selected' : 'btn'}
						>
							<Home />
						</button>
						<button
							on:click={() => ($display.main = 'tech')}
							class={$display.main === 'tech' ? 'selected' : 'btn'}
						>
							<Stack />
						</button>
						<button
							on:click={() => ($display.main = 'models')}
							class={$display.main === 'models' ? 'selected' : 'btn'}
						>
							<Branch />
						</button>
					</nav>
				{/if}
			</div>
		</div>
	</div>
</div>
