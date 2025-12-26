<script lang="ts">
  import { fade } from 'svelte/transition';
  import Response from '$lib/components/input/Response.svelte';

  type Props = {
    type: string;
    placeholder?: string;
    message?: string;
    onsubmit: (value: string) => Promise<InputResponse>;
  };

  let { type, placeholder = '', message = '', onsubmit }: Props = $props();

  let value: string = $state('');
  let response: Promise<InputResponse> = $derived(
    Promise.resolve({ error: false, message: message })
  );
</script>

<input
  class="size-full w-full px-2 text-primary"
  {type}
  {placeholder}
  bind:value
  onkeydown={(event) => {
    if (event.key === 'Enter' && value) {
      response = onsubmit(value);
    }
  }} />

<!-- submit button & response -->
<button
  in:fade
  class="relative grid size-10 cursor-pointer place-content-center text-primary"
  onclick={() => {
    if (value) {
      response = onsubmit(value);
    }
  }}>
  <Response {response} />
</button>
