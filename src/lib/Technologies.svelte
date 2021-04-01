<script>
	import Card from '$lib/Card.svelte';
</script>

<div>
	<p class="m-8 text-gray-700 text-center">Serverless stack used to build this web app</p>
	<ul class="grid m-4 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<Card
			named="PyTorch"
			type="ML Framework"
			logo="/pytorch.png"
			website="https://pytorch.org"
			repo="https://github.com/pytorch/pytorch"
		/>
		<Card
			named="AWS Lambda"
			type="Serverless Compute"
			logo="/lambda.png"
			website="https://aws.amazon.com/lambda/"
			repo="https://github.com/awsdocs/aws-lambda-developer-guide"
		/>
		<Card
			named="FastAPI"
			type="Backend Framework"
			logo="/fastapi.png"
			website="https://fastapi.tiangolo.com"
			repo="https://github.com/tiangolo/fastapi"
		/>
		<Card
			named="Svelte"
			type="Javascript Framework"
			logo="/svelte.png"
			website="https://svelte.dev/"
			repo="https://github.com/sveltejs/svelte"
		/>
		<Card
			named="Tailwind"
			type="CSS Framework"
			logo="/tailwind.png"
			website="https://tailwindcss.com/"
			repo="https://github.com/tailwindlabs/tailwindcss"
		/>
		<Card
			named="Vite / Rollup / PostCSS"
			type="Frontend Build Tools"
			logo="/vite.png"
			website="https://vitejs.dev/"
			repo="https://github.com/vitejs/vite"
		/>
		<Card
			named="VS Code"
			type="Text Editor / IDE"
			logo="/vscode.png"
			website="https://code.visualstudio.com/"
			repo="https://github.com/microsoft/vscode"
		/>
		<Card
			named="Netlify"
			type="Hosting + CI/CD"
			logo="/netlify.png"
			website="https://www.netlify.com/"
			repo="https://github.com/netlify"
		/>
	</ul>
</div>
