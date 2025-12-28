<script lang="ts">
  import demo from '$lib/assets/tf/demo.png';
  import soldier from '$lib/assets/tf/soldier.png';
</script>

<div class="flex">
  <img class="object-none" src={soldier} alt="" />
  <img class="object-none" src={demo} alt="" />
</div>

<style>
  /* match theme content color */
  img {
    filter: brightness(0) saturate(100%) invert(97%) sepia(49%) saturate(6023%) hue-rotate(179deg)
      brightness(100%) contrast(108%);
  }
</style>
