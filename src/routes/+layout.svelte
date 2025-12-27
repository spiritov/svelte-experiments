<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import Nav from '$lib/components/layout/nav/Nav.svelte';
  import { page } from '$app/state';

  let { children } = $props();
  let route = $derived(page.url.pathname);

  const session = {
    displayName: 'dreambreak',
    id: '765',
    role: 'Admin',
    steamAvatarUrl:
      'https://avatars.fastly.steamstatic.com/a601329884762a3ae565a8cf369ef9f4178b0daf_full.jpg'
  };
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Nav {session} {route} />

<div class="flex w-full flex-col items-center">
  <div class="relative flex w-full max-w-5xl flex-col gap-4 bg-base-800 p-8">
    {@render children()}
  </div>
</div>
