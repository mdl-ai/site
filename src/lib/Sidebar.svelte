<script>
	import Logo from '../svg/Logo.svelte';
	import Branch from './../svg/Branch.svelte';
	import Home from './../svg/Home.svelte';
	import Stack from '../svg/Stack.svelte';
	import { display } from './../stores.js';
</script>

<div class="flex h-screen overflow-hidden ">
	<div class="hidden bg-gray-800 md:flex md:flex-shrink-0">
		<div class="flex flex-col w-64">
			<div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
				<div class="flex items-center flex-shrink-0 px-4">
					<Logo />
				</div>
				<div class="flex flex-col flex-1 mt-5">
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
				</div>
			</div>
		</div>
	</div>
</div>
