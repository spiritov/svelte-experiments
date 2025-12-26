<script lang="ts">
  type Props = {
    value: string;
    selected: boolean;
    onmousedown: (value: string) => void;
  };

  let { value, selected, onmousedown } = $props();

  let option: HTMLButtonElement | undefined = $state();

  $effect(() => {
    if (selected && option) {
      option.scrollIntoView({ behavior: 'auto' });
    }
  });
</script>

<button
  bind:this={option}
  class="group flex w-full text-left text-primary first:mt-2 last:mb-2"
  {onmousedown}>
  <span class="mx-2 w-full rounded-md pl-1 group-hover:bg-base-800 {selected ? 'bg-base-800' : ''}">
    {value}
  </span>
</button>
