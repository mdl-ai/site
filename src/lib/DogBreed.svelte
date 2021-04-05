<script>
	import UploadIcon from './../svg/UploadIcon.svelte';
	import Dog from './../svg/Dog.svelte';
	import SpinNew from './SpinNew.svelte';
	import { api } from './../stores.js';

	let fetchBreed;
	let fetchImage;
	let url;
	let fileinput;
	let lastRequest = 'url';

	const onFileSelected = (e) => {
		lastRequest = 'base64';
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			fetchImage = e.target.result;
			fetchBreed = fetchData('base64');
		};
	};

	async function fetchData(type) {
		let body_json;
		if (type === 'base64') {
			body_json = JSON.stringify({ data: fetchImage });
		} else if (type === 'url') {
			body_json = JSON.stringify({ url: url.message });
		}

		const response = await fetch(`${$api}/dog_breed/`, {
			method: 'POST',
			headers: {
				Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
			},
			body: body_json
		});
		return await response.json();
	}

	function newImage() {
		lastRequest = 'url';
		fetchImage = (async () => {
			const response = await fetch('https://dog.ceo/api/breeds/image/random');
			url = await response.json();
			predictBreed();
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
		fetchBreed = fetchData(lastRequest);
	}
</script>

<div class="flex flex-col items-center">
	<div class="text-color">Get a random dog from the internet</div>
	<button class="my-2 p-4  bg-indigo-400 rounded-lg border-gray-400" on:click={newImage}> New Dog </button>
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
			<button class="p-4 mt-2 text-center bg-indigo-400 rounded-lg border-gray-400" on:click={predictBreed}> Identify Breed </button>
		{:else}
			{#await fetchBreed}
				<button class="p-4 text-center mt-2 bg-yellow-400 rounded-lg border-gray-400" on:click={predictBreed}> ...AI Identifying </button>
			{:then data}
				<button class="p-4 mt-2 bg-green-400 text-center  rounded-lg border-gray-400" on:click={predictBreed}>
					{data}
				</button>
			{:catch}
				<button class="p-4 mt-2 bg-red-400 text-center  rounded-lg border-gray-400" on:click={predictBreed}> API Error </button>
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

	<input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e) => onFileSelected(e)} bind:this={fileinput} />
</div>

<style>
	button {
		@apply text-gray-900;
	}
	.fa-primary {
		@apply text-purple-500 fill-current;
	}
	p {
		@apply text-color;
	}
</style>
