<script>
	import Percent from '../svg/Percent.svelte';
	import DogSmall from './../svg/DogSmall.svelte';
	import LogoText from './../svg/LogoText.svelte';
	import LogoSmall from './../svg/LogoSmall.svelte';
	import Home from './../svg/Home.svelte';
	import Stack from '../svg/Stack.svelte';
	import { display } from '../stores.js';
	import { fly } from 'svelte/transition';
</script>

{#if $display.sidebar}
	<div class="flex h-screen overflow-hidden ">
		<div class=" bg-gray-800 md:flex md:flex-shrink-0">
			<div class="flex flex-col ">
				<div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
					<div class="px-5 pb-4 flex">
						<LogoSmall />
						<LogoText />
					</div>
					<nav class="flex-1 px-2 space-y-1">
						<button on:click={() => ($display.main = 'home')} class={$display.main === 'home' ? 'selected' : 'btn'}>
							<Home />
							<span in:fly={{ x: 250, opacity: 1, duration: 300 }}>Home</span>
						</button>
						<button on:click={() => ($display.main = 'tech')} class={$display.main === 'tech' ? 'selected' : 'btn'}>
							<Stack />
							<span in:fly={{ x: 250, opacity: 1, duration: 300 }}>Technologies</span>
						</button>
						<button on:click={() => ($display.main = 'models')} class={$display.main === 'models' ? 'selected' : 'btn'}>
							<DogSmall />
							<span in:fly={{ x: 250, opacity: 1, duration: 300 }}>Dog Classify</span>
						</button>
						<button on:click={() => ($display.main = 'lighthouse')} class={$display.main === 'lighthouse' ? 'selected' : 'btn'}>
							<Percent />
							<span in:fly={{ x: 250, opacity: 1, duration: 300 }}>Performance</span>
						</button>
					</nav>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="flex h-screen overflow-hidden ">
		<div class=" bg-gray-800 md:flex md:flex-shrink-0">
			<div class="flex flex-col ">
				<div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
					<div class="pl-5 pb-4">
						<LogoSmall />
					</div>
					<nav class="px-2 space-y-1">
						<button on:click={() => ($display.main = 'home')} aria-label="Home" class={$display.main === 'home' ? 'selected' : 'btn'}>
							<Home />
						</button>
						<button on:click={() => ($display.main = 'tech')} aria-label="Stack" class={$display.main === 'tech' ? 'selected' : 'btn'}>
							<Stack />
						</button>
						<button on:click={() => ($display.main = 'models')} aria-label="Dog Classify" class={$display.main === 'models' ? 'selected' : 'btn'}>
							<DogSmall />
						</button>
						<button on:click={() => ($display.main = 'lighthouse')} aria-label="Site Performance" class={$display.main === 'lighthouse' ? 'selected' : 'btn'}>
							<Percent />
						</button>
					</nav>
				</div>
			</div>
		</div>
	</div>
{/if}
