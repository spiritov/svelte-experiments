<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fade } from 'svelte/transition';

  type Props = {
    data: object[];
    header: Snippet;
    row: Snippet<[object]>;
  };

  let { data, header, row }: Props = $props();
</script>

<table class="border-separate border-spacing-y-0.5 rounded-layout text-sm">
  <!-- header -->
  <thead class="text-primary/75">
    <tr class="truncate">
      <!-- <th class="w-number">{content}</th> -->
      {@render header()}
    </tr>
  </thead>

  <!-- rows -->
  <tbody>
    {#each data as object}
      <tr transition:fade class="my-1 truncate">
        {@render row(object)}
        <!-- <td>{content}</td> -->
      </tr>
    {/each}
  </tbody>
</table>
