<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex w-full flex-col items-center">
  <div class="relative flex w-full max-w-5xl flex-col gap-4 bg-base-800 p-8">
    {@render children()}
  </div>
</div>
