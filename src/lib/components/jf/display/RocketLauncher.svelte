<script lang="ts">
  import rl_stock from '$lib/assets/tf/rl_stock.png';
  import rl_original from '$lib/assets/tf/rl_original.png';
  import rl_mangler from '$lib/assets/tf/rl_mangler.png';

  const rlMap = new Map([
    ['Stock', rl_stock],
    ['Original', rl_original],
    ['Mangler', rl_mangler]
  ]);

  type Props = {
    launcher: 'Stock' | 'Original' | 'Mangler';
  };

  let { launcher }: Props = $props();
</script>

<img src={rlMap.get(launcher)} alt="" draggable="false" class="size-fit object-none select-none" />

<style>
  /* match theme content color */
  img {
    filter: brightness(0) saturate(100%) invert(97%) sepia(49%) saturate(6023%) hue-rotate(179deg)
      brightness(100%) contrast(108%);
  }
</style>
