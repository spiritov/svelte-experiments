<script lang="ts">
  import Flag from '../Flag.svelte';

  type Props = {
    player: Player;
  };

  let { player }: Props = $props();
</script>

<div
  class="group flex size-full cursor-pointer items-center gap-2 rounded-box px-2 hover:border hover:border-content/50 hover:bg-base-900">
  <Flag code={player.country_code} />
  <img class="ml-4 size-8 rounded-box" src={player.steam_avatar_url} alt="" />
  <span class="truncate group-hover:underline">{player.display_name}</span>
</div>
