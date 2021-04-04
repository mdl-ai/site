<script>
	import Card from '$lib/Card.svelte';
</script>

<div>
	<p class="m-8 text-gray-700 text-center">
		<span class="text-color">Technologies for highly performant AI web apps that scale</span>
	</p>
	<ul class="grid m-4 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<Card
			named="PyTorch"
			type="ML Framework"
			logo="/img/pytorch.png"
			website="https://pytorch.org"
			repo="https://github.com/pytorch/pytorch"
		/>
		<Card
			named="AWS Lambda"
			type="Serverless Compute"
			logo="/svg/lambda.svg"
			website="https://aws.amazon.com/lambda/"
			repo="https://github.com/awsdocs/aws-lambda-developer-guide"
		/>
		<Card
			named="Svelte"
			type="Javascript Framework"
			logo="/img/svelte.png"
			website="https://svelte.dev/"
			repo="https://github.com/sveltejs/svelte"
		/>
		<Card
			named="Tailwind"
			type="CSS Framework"
			logo="/svg/tailwind.svg"
			website="https://tailwindcss.com/"
			repo="https://github.com/tailwindlabs/tailwindcss"
		/>
		<Card
			named="Vite / Rollup / PostCSS"
			type="Frontend Build Tools"
			logo="/img/vite.png"
			website="https://vitejs.dev/"
			repo="https://github.com/vitejs/vite"
		/>
		<Card
			named="AWS Amplify"
			type="Static Hosting + CI/CD"
			logo="/svg/amplify.svg"
			website="https://aws.amazon.com/amplify/"
			repo="https://github.com/aws-amplify"
		/>
	</ul>
</div>
