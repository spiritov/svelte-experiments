<script lang="ts">
  import { page } from '$app/state';
  import Link from '$lib/components/display/Link.svelte';
  import Table from '$lib/components/display/table/Table.svelte';
  import Button from '$lib/components/input/Button.svelte';
  import SelectButton from '$lib/components/input/select/SelectButton.svelte';
  import InnerNav from '$lib/components/layout/InnerNav.svelte';
  import Section from '$lib/components/layout/Section.svelte';

  import DivisionTag from '$lib/components/display/DivisionTag.svelte';
  import TablePlayer from '$lib/components/display/table/TablePlayer.svelte';
  import TableMap from '$lib/components/display/table/TableMap.svelte';
  import Header from '$lib/components/display/profile/Header.svelte';
  import Competition from '$lib/components/display/Competition.svelte';

  let route = $derived(page.url.pathname);

  const player: Player = {
    country: 'United States',
    country_code: 'us',
    created_at: '1',
    demo_division: 'Wood',
    display_name: 'dreambreaker',
    id: '1',
    preferred_class: 'Soldier',
    preferred_launcher: 'Stock',
    role: 'Admin',
    soldier_division: 'Platinum',
    steam_avatar_url:
      'https://avatars.fastly.steamstatic.com/a601329884762a3ae565a8cf369ef9f4178b0daf_full.jpg',
    tempus_id: 1
  };

  const points: PlayerPoints = {
    soldier: {
      last_3_monthly: 123,
      last_9_motw: 456,
      total: 78910
    },
    demo: {
      last_3_monthly: 1112,
      last_9_motw: 1314,
      total: 151617
    }
  };

  const maps = [
    { name: 'jump_flood', divisions: ['Wood', 'Steel', 'Bronze'] },
    { name: 'jump_escape_rc4', divisions: ['Silver', 'Gold'] },
    { name: 'jump_temple_final', divisions: ['Platinum', 'Diamond'] }
  ];

  let selected_class = $state('Soldier');
</script>

<Header {player} {points} bind:selected={selected_class} />

<Competition {maps} />

<div class="prose text-content">
  <code class="bg-base-900 p-1 text-primary">npm run storybook</code>
  <span>to view components</span>
</div>

<Section label="Test Section">
  <InnerNav {route} parentRoute={'monthly'} pages={['', 'monthly', 'competition', 'other']} />

  <DivisionTag div="Diamond" />
</Section>
