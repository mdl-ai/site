<script>
	import Sidebar from '$lib/Sidebar.svelte';
	import Technologies from '$lib/Technologies.svelte';
	import ProfileBanner from '$lib/ProfileBanner.svelte';
</script>

<div class="bg-gray-200 flex">
	<div>
		<Sidebar />
	</div>
	<div>
		<Technologies />
	</div>
</div>

<!-- <ProfileBanner /> -->
<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
