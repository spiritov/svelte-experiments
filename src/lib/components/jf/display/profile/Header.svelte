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

<div class="relative flex h-58 flex-col overflow-hidden rounded-layout bg-base-900">
  <!-- top right, class select -->
  <div class="absolute right-0 z-10">
    <SelectClass />
  </div>

  <!-- center overlay -->
  <div class="absolute top-1/4 left-4 z-10 flex h-1/2 gap-4">
    <!-- avatar -->
    <img class="size-32 rounded-layout drop-shadow-lg/50" src={player.steam_avatar_url} alt="" />
    <div class="relative">
      <!-- display name -->
      <div class="absolute flex h-32 items-center">
        <span class="rounded-layout bg-base-900 px-2 py-1 text-2xl text-primary"
          >{player.display_name}</span>
      </div>
    </div>
  </div>
  <!-- top half, map bg -->
  <div
    class="flex h-32 w-full mask-b-from-90% bg-cover bg-center"
    style:background-image={`url("https://tempusplaza.xyz/map-backgrounds/${'jump_escape_rc4'}.jpg")`}>
  </div>
  <!-- middle -->
  <div class="mask flex h-16 w-full pl-36">
    <div class="relative z-10 flex items-center gap-2 px-3 py-0">
      <div class="flex items-center gap-1">
        <Flag code={player.country_code} />
        <span class="text-content/75">{player.country}</span>
      </div>
      <span class="icon-[mdi--circle] size-1.5 text-content/75"></span>
      <span class="text-division-{player.soldier_division?.toLowerCase() ?? ''}">
        {player.soldier_division} Soldier
      </span>
    </div>
  </div>
  <!-- bottom -->
  <div class="relative z-10 flex h-10 w-full items-center gap-2 px-4">
    <Link label="Tempus" src={tempus} href={`https://tempus2.xyz/players/${player.tempus_id}`} />
    <Link label="Plaza" src={plaza} href={`https://tempusplaza.xyz/players/${player.tempus_id}`} />
  </div>
</div>
