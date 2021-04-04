<script>
	import UploadIcon from './../svg/UploadIcon.svelte';
	import Dog from './../svg/Dog.svelte';
	import SpinNew from './SpinNew.svelte';
	import { api } from './../stores.js';

	let fetchBreed;
	let fetchImage;
	let url;
	let avatar, fileinput;

	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			fetchImage = e.target.result;
			fetchBreed = (async () => {
				console.log(avatar);
				const response = await fetch(`${$api}breed/`, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ data: e.target.result })
				});
				return await response.json();
			})();
		};
	};

	function newImage() {
		fetchImage = (async () => {
			console.log('wow cool');
			const response = await fetch('https://dog.ceo/api/breeds/image/random');
			url = await response.json();
			return await preload(url.message);
		})();
	}

	newImage();

	const preload = async (src) => {
		const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise(function (resolve) {
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject('Error: ', error);
		});
	};

	function predictBreed() {
		fetchBreed = (async () => {
			console.log('img_src: ', url);
			const response = await fetch(`${$api}breed/`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ url: url.message })
			});
			return await response.json();
		})();
	}
</script>

<div class="flex flex-col items-center">
	<div class="text-color">Get a random dog from the internet</div>
	<button class="my-2 p-4  bg-indigo-400 rounded-lg border-gray-400" on:click={newImage}>
		New Dog
	</button>
	{#await fetchImage}
		<SpinNew />
		<Dog />
	{:then data}
		<img src={data} alt="Dog image" class="max-h-96 " />
	{:catch error}
		<p>Erorr retrieving image: {error}</p>
	{/await}
	<div class="flex flex-col items-center">
		{#if !fetchBreed}
			<button
				class="p-4 mt-2 text-center bg-indigo-400 rounded-lg border-gray-400"
				on:click={predictBreed}
			>
				Identify Breed
			</button>
		{:else}
			{#await fetchBreed}
				<div
					class="p-4 text-center mt-2 bg-yellow-400 rounded-lg border-gray-400"
					on:click={predictBreed}
				>
					...AI Identifying
				</div>
			{:then data}
				<div
					class="p-4 mt-2 bg-green-400 text-center  rounded-lg border-gray-400"
					on:click={predictBreed}
				>
					{data}
				</div>
			{:catch error}
				<p>Error running AI: {Error}</p>
			{/await}
		{/if}
	</div>

	<div class="text-color">Upload your own image:</div>

	<button
		on:click={() => {
			fileinput.click();
		}}
	>
		<UploadIcon />
	</button>

	<input
		style="display:none"
		type="file"
		accept=".jpg, .jpeg, .png"
		on:change={(e) => onFileSelected(e)}
		bind:this={fileinput}
	/>
	<p class="m-2 text-color">
		The model was fine tuned for dog breeds from many categories of items.
	</p>
	<p class="m-2 text-color">Try uploading images of other things, it remembers a lot!</p>
</div>

<style>
	.fa-primary {
		@apply text-purple-500 fill-current;
	}
	p {
		@apply text-color;
	}
</style>
