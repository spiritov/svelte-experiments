<script lang="ts">
  import { page } from '$app/state';
  import Link from '$lib/components/display/Link.svelte';
  import Table from '$lib/components/display/table/Table.svelte';
  import Button from '$lib/components/input/Button.svelte';
  import ButtonSelect from '$lib/components/jf/input/ButtonSelect.svelte';
  import InnerNav from '$lib/components/layout/InnerNav.svelte';
  import Section from '$lib/components/layout/Section.svelte';

  import rl_stock from '$lib/assets/tf/rl_stock.png';
  import rl_original from '$lib/assets/tf/rl_original.png';
  import rl_mangler from '$lib/assets/tf/rl_mangler.png';
  import Division from '$lib/components/jf/display/Division.svelte';
  import TablePlayer from '$lib/components/display/table/Player.svelte';
  import Map from '$lib/components/display/table/Map.svelte';

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
</script>

<div class="prose text-content">
  <code class="bg-base-900 p-1 text-primary">npm run storybook</code>
  <span>to view components</span>
</div>

<Section label="Test Section">
  <Button
    onsubmit={async () => {
      return { error: false, message: 'success' };
    }}
    ><span class="icon-[mdi--check] w-6"></span>
  </Button>

  <InnerNav {route} parentRoute={'monthly'} pages={['', 'monthly', 'competition', 'other']} />

  <Link src="" href="/" label="aaa" />

  <Table data={[{}]}>
    {#snippet header()}
      <th class="w-1/14">rank</th>
      <th class="w-1/14">div rank</th>
      <th></th>
      <th class="text-ctp-lavender-50/75 w-1/12">monthlies played</th>
      <th class="text-ctp-lavender-50/75 w-1/12">MOTWs played</th>
      <th class="w-1/4">last 3 monthlies</th>
      <th class="text-ctp-lavender-50/75 w-1/8">total points</th>
    {/snippet}
    {#snippet row()}
      <td>#1</td>
      <td>#1</td>
      <td>
        <TablePlayer {player} />
      </td>
      <td class="text-ctp-lavender-50/75">4</td>
      <td class="text-ctp-lavender-50/75">10</td>
      <td><Map map="jump_flood" /></td>
      <td>900000</td>
    {/snippet}
  </Table>

  <ButtonSelect
    label="fav launcher"
    options={[
      { src: rl_stock, value: 'Stock' },
      { src: rl_original, value: 'Original' },
      { src: rl_mangler, value: 'Mangler' }
    ]}
    withNone={true}
    selected="Original"
    onsubmit={(value: string) => {}} />

  <Division div="Diamond" />
</Section>
