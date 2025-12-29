<script lang="ts">
  import plaza from '$lib/assets/components/profile/plaza.png';
  import tempus from '$lib/assets/components/profile/tempus.png';

  import Flag from '$lib/components/display/Flag.svelte';
  import Link from '$lib/components/display/Link.svelte';
  import SelectClass from '../../input/SelectClass.svelte';

  type Props = {
    player: Player;
  };

  let { player }: Props = $props();
</script>

<!-- container -->
<div
  class="absolute top-0 left-0 flex h-64 w-full flex-col overflow-hidden rounded-t-layout bg-base-900">
  <!-- absolute avatar -->
  <img
    class="absolute top-1/3 left-8 z-10 size-32 rounded-layout drop-shadow-md/50"
    src={player.steam_avatar_url}
    alt="" />
  <!-- absolute display name -->
  <div class="absolute top-36 left-0 z-10 ml-44">
    <span class="rounded-layout bg-base-900 px-2 py-1 pb-12 text-2xl text-primary"
      >{player.display_name}</span>
  </div>
  <!-- absolute class select -->
  <div class="absolute right-8 bottom-0.5 z-20 flex">
    <SelectClass selected={player.preferred_class} onsubmit={() => {}} />
  </div>

  <!-- top, map bg image -->
  <img
    class="h-2/3 w-full mask-b-from-95% object-cover object-center"
    src="https://tempusplaza.xyz/map-backgrounds/{'jump_escape_rc4'}.jpg"
    alt="" />
  <!-- middle, country & division -->
  <div class="relative z-10 ml-40 h-1/6 px-3 pt-3">
    <div class="flex items-center gap-1 text-content/75">
      <Flag code={player.country_code} country={player.country} />
      <span class="icon-[mdi--circle-medium] size-3.5"></span>
      <span class="text-division-{player.soldier_division?.toLowerCase() ?? ''}">
        {player.soldier_division} Soldier
      </span>
    </div>
  </div>
  <!-- bottom, links -->
  <div class="ml-8 flex grow items-center gap-2 text-sm">
    <Link label="Tempus" src={tempus} href={`https://tempus2.xyz/players/${player.tempus_id}`} />
    <Link label="Plaza" src={plaza} href={`https://tempusplaza.xyz/players/${player.tempus_id}`} />
  </div>
</div>

<hr class="h-58 w-full" />
