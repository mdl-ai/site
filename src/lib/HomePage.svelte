<script>
	import { display } from './../stores.js';
</script>

<div class="w-full md:mt-20 flex items-center justify-center bg-color">
	<div class="md:w-2/3 w-full px-4 text-color flex flex-col">
		<div class="w-full md:text-7xl text-xl font-bold">
			<h1 class="w-full md:w-2/3">Rapid Iteration</h1>
			<h1 class="w-full md:w-2/3">Unlimited Scalability</h1>
		</div>
		<div class="flex mt-8 flex-col md:flex-row md:justify-between">
			<div class="flex flex-col">
				<p class="w-full text-color">
					Get your AI web apps to market in record speed using technologies built for scale
				</p>
				<p class="w-full mt-3 text-color">
					High performance PWA that runs on Web, Android and IOS from a single codebase
				</p>
				<p class="w-full mt-3 text-color">No lock in, run your app on any cloud provider</p>
			</div>
			<div class="flex flex-col">
				<div class="py-2 md:pl-8 md:pt-0">
					<button
						href="mailto:mdldotai@gmail.com"
						class="bg-indigo-500 text-gray-800 justify-center text-center rounded-lg md:flex shadow px-4 py-3 items-center"
						on:click={() => ($display.main = 'models')}
					>
						Dog Demo
					</button>
				</div>
				<div class="pt-6 md:pl-8 md:pt-0">
					<a
						href="mailto:mdldotai@gmail.com"
						class="bg-indigo-500 text-gray-800 justify-center text-center rounded-lg md:flex shadow px-4 py-3 items-center"
						>Contact us
					</a>
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<div class="flex mt-24 mb-12 flex-row justify-between" />
			<hr class="border-gray-600 dark:border-gray-400" />
			<p class="w-full text-center my-12 text-color">Copyright © 2021 mdl.ai</p>
		</div>
	</div>
</div>
