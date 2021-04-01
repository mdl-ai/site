<!-- This example requires Tailwind CSS v2.0+ -->
<script>
  export let named;
  export let type;
  export let logo;
  export let website;
  export let repo;
</script>

<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
  <div class="w-full flex items-center justify-between p-6 space-x-6">
    <div class="flex-1 truncate">
      <div class="flex items-center space-x-3">
        <h3 class="text-gray-900 text-sm font-medium truncate">{named}</h3>
      </div>
      <p class="mt-1 text-gray-500 text-sm truncate">{type}</p>
    </div>
    <img class="w-10 h-10 object-contain" src={logo} alt="" />
  </div>
  <div>
    <div class="-mt-px flex divide-x divide-gray-200">
      <div class="w-0 flex-1 flex">
        <a
          href={website}
          target="_blank"
          class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
        >
          <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <span class="ml-3">Website</span>
        </a>
      </div>
      <div class="-ml-px w-0 flex-1 flex">
        <a
          href={repo}
          target="_blank"
          class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
        >
          <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span class="ml-3">Repo</span>
        </a>
      </div>
    </div>
  </div>
</li>
