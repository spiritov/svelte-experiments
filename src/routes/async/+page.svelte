<script lang="ts">
  // this example fetches data using {#await} blocks for pending state.
  // once the promise resolves, its data is also assigned to a reactive variable, used in the {:then} state
  // this way, the "promise's data" is reactive

  import { getPlayers, type Player } from '$lib/api';

  let playersPromise = $state(getPlayers());
  let players: Player[] = $state([]);

  players = await playersPromise;
</script>

{#await playersPromise}
  <span>waiting for data..</span>
{:then _}
  {#each players as player, i}
    <span>{JSON.stringify(player)}</span>
    <button
      class="bg-black text-white"
      onclick={() => {
        players[i].points++;
      }}>add points to player</button>
  {/each}
{/await}
