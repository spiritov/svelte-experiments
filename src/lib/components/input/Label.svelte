<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    label: string;
    children: Snippet;
    onsubmit?: (value: string) => Promise<InputResponse> | void;
    response?: Promise<InputResponse> | null;
  };

  let { label, children, onsubmit = () => {}, response = null }: Props = $props();
</script>

<!-- container for input & response -->
<label
  class="relative w-full max-w-80 rounded-none border border-base-700 transition-colors focus-within:border-content/50 focus-within:bg-base-900">
  <!-- label -->
  <span class="absolute -top-1 left-2 bg-base-800 px-1 text-sm leading-1">{label}</span>
  <!-- input container -->
  <div class="relative flex h-10">
    {@render children()}
  </div>
</label>
