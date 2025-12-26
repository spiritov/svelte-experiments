<script lang="ts">
  let { response }: { response: Promise<InputResponse> } = $props();
</script>

{#await response}
  <span class="icon-[mdi--loading] animate-spin"></span>
{:then response}
  {#if response}
    <span class="icon-[mdi--send] {response.error ? 'text-error' : ''}"></span>
    {#if response.message}
      <span
        class="absolute left-full ml-2 flex h-full items-center
          {response.error ? 'text-error' : 'text-success'}">
        {response.message}
      </span>
    {/if}
  {:else}
    <span class="icon-[mdi--send]"></span>
  {/if}
{/await}
