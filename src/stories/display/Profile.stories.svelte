<script module>
  // @ts-nocheck

  import '../../routes/layout.css';

  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Header from '$lib/components/display/profile/Header.svelte';

  const { Story } = defineMeta({
    component: Header
  });
  const player = {
    country: 'United States',
    country_code: 'us',
    created_at: '1',
    demo_division: 'Wood',
    display_name: 'nameless',
    id: '1',
    preferred_class: 'Soldier',
    preferred_launcher: 'Stock',
    role: 'Admin',
    soldier_division: 'Platinum',
    steam_avatar_url:
      'https://avatars.fastly.steamstatic.com/a601329884762a3ae565a8cf369ef9f4178b0daf_full.jpg',
    tempus_id: 254279
  };

  const points = {
    soldier: {
      last_3_monthly: 12345,
      last_9_motw: 67891,
      total: 111213
    },
    demo: {
      last_3_monthly: 14151,
      last_9_motw: 17181,
      total: 202122
    }
  };

  let selected = $state(player.preferred_class);
</script>

<Story name="Header" args={{ player: player, points: points }}>
  {#snippet template(args)}
    <div class="relative w-5xl">
      <Header player={args.player} points={args.points} bind:selected />
    </div>
  {/snippet}
</Story>
