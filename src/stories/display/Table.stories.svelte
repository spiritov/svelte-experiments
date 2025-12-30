<script module>
  // @ts-nocheck

  import '../../routes/layout.css';

  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Table from '$lib/components/display/table/Table.svelte';
  import TablePlayer from '$lib/components/display/table/TablePlayer.svelte';
  import Division from '$lib/components/display/DivisionTag.svelte';
  import TableMap from '$lib/components/display/table/TableMap.svelte';

  const { Story } = defineMeta({
    component: Table
  });

  const data = [
    {
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
    },
    {
      country: 'United States',
      country_code: 'jp',
      created_at: '1',
      demo_division: 'Wood',
      display_name: 'a named jumper',
      id: '2',
      preferred_class: 'Soldier',
      preferred_launcher: 'Stock',
      role: 'Admin',
      soldier_division: 'Diamond',
      steam_avatar_url:
        'https://avatars.fastly.steamstatic.com/a601329884762a3ae565a8cf369ef9f4178b0daf_full.jpg',
      tempus_id: 254279
    },
    {
      country: 'United States',
      country_code: 'nz',
      created_at: '1',
      demo_division: 'Wood',
      display_name: 'renamed player',
      id: '3',
      preferred_class: 'Soldier',
      preferred_launcher: 'Stock',
      role: 'Admin',
      soldier_division: 'Gold',
      steam_avatar_url:
        'https://avatars.fastly.steamstatic.com/a601329884762a3ae565a8cf369ef9f4178b0daf_full.jpg',
      tempus_id: 254279
    },
    {
      country: 'United States',
      country_code: 'nl',
      created_at: '1',
      demo_division: 'Wood',
      display_name: 'nameless',
      id: '4',
      preferred_class: 'Soldier',
      preferred_launcher: 'Stock',
      role: 'Admin',
      soldier_division: 'Silver',
      steam_avatar_url:
        'https://avatars.fastly.steamstatic.com/a601329884762a3ae565a8cf369ef9f4178b0daf_full.jpg',
      tempus_id: 254279
    },
    {
      country: 'United States',
      country_code: 'kr',
      created_at: '1',
      demo_division: 'Wood',
      display_name: 'a named jumper',
      id: '5',
      preferred_class: 'Soldier',
      preferred_launcher: 'Stock',
      role: 'Admin',
      soldier_division: 'Wood',
      steam_avatar_url:
        'https://avatars.fastly.steamstatic.com/a601329884762a3ae565a8cf369ef9f4178b0daf_full.jpg',
      tempus_id: 254279
    },
    {
      country: 'United States',
      country_code: 'ca',
      created_at: '1',
      demo_division: 'Wood',
      display_name: 'renamed player',
      id: '6',
      preferred_class: 'Silver',
      preferred_launcher: 'Stock',
      role: 'Admin',
      soldier_division: 'Steel',
      steam_avatar_url:
        'https://avatars.fastly.steamstatic.com/a601329884762a3ae565a8cf369ef9f4178b0daf_full.jpg',
      tempus_id: 254279
    }
  ];
</script>

<Story name="Table" args={{ data: data }}>
  {#snippet template(args)}
    <Table {...args}>
      {#snippet header()}
        <th class="w-1/12">id</th>
        <th class=""></th>
        <th class="w-1/4">map</th>
        <th class="w-1/12">division</th>
      {/snippet}
      {#snippet row(player)}
        <td>{player.id}</td>
        <td><TablePlayer {player} /></td>
        <td><TableMap map="jump_kestrel_rc5" /></td>
        <td><Division div={player.soldier_division} /></td>
      {/snippet}
    </Table>
  {/snippet}
</Story>
