<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    label: string;
    children: Snippet;
    indent: number;
  };

  let { label, indent = 0, children } = $props();
</script>

<div class="flex flex-col gap-1">
  <!-- label -->
  <div class="flex items-center gap-1">
    <hr class="mt-1 w-0 rounded-theme text-base-700" style:width={`${indent / 4}rem`} />
    <span class="text-lg text-nowrap text-primary">{label}</span>
    <hr class="mt-1 w-full rounded-theme text-base-700" />
  </div>

  <!-- inner content -->
  {@render children()}
</div>
