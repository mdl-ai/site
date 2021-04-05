<script>
	import Card from '$lib/Card.svelte';
</script>

<div>
	<p class="m-8 text-gray-700 text-center">
		<span class="text-color">Technologies used to build this app</span>
	</p>
	<ul class="grid m-4 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<Card named="PyTorch" type="Machine Learning" logo="/img/pytorch.png" website="https://pytorch.org" repo="https://github.com/pytorch/pytorch" />
		<Card named="AWS Lambda" type="Serverless Compute" logo="/svg/lambda.svg" website="https://aws.amazon.com/lambda/" repo="https://github.com/awsdocs/aws-lambda-developer-guide" />
		<Card named="AWS API Gateway" type="Serverless API" logo="/svg/api-gateway.svg" website="https://aws.amazon.com/api-gateway/" repo="https://github.com/awsdocs/amazon-api-gateway-developer-guide/blob/main/doc_source/api-gateway-create-api-step-by-step.md" />
		<Card named="AWS Amplify" type="Static Hosting + CI/CD" logo="/svg/amplify.svg" website="https://aws.amazon.com/amplify/" repo="https://github.com/aws-amplify" />
		<Card named="Docker" type="Containerization" logo="/svg/docker.svg" website="https://www.docker.com/" repo="https://github.com/docker" />
		<Card named="Svelte" type="Javascript Library" logo="/img/svelte.png" website="https://svelte.dev/" repo="https://github.com/sveltejs/svelte" />
		<Card named="Tailwind" type="CSS Library" logo="/svg/tailwind.svg" website="https://tailwindcss.com/" repo="https://github.com/tailwindlabs/tailwindcss" />
		<Card named="Vite / Rollup / PostCSS" type="Frontend Build Tools" logo="/img/vite.png" website="https://vitejs.dev/" repo="https://github.com/vitejs/vite" />
	</ul>
	<p class="text-center text-color">AWS Lambda runs a Docker image for optimal scalability and cost</p>
	<p class="text-center text-color">Higher cost option AWS Fargate, removing the 'cold start' if Lambda is idle too long</p>
	<p class="text-center text-color">Full CI/CD intergration, frontend updates on 'git push', backend updates with 'sam deploy'</p>
</div>
