<script module>
  // @ts-nocheck

  import '../../routes/layout.css';

  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Competition from '$lib/components/display/Competition.svelte';

  const { Story } = defineMeta({
    component: Competition
  });

  // placeholder
  const maps = [
    { name: 'jump_beef', divisions: ['Wood', 'Steel', 'Bronze'] },
    { name: 'jump_biolab', divisions: ['Silver', 'Gold'] },
    { name: 'jump_kestrel_rc5', divisions: ['Platinum', 'Diamond'] }
  ];
</script>

<Story name="Competition" args={{ maps: maps }}>
  {#snippet template(args)}
    <div class="relative w-5xl">
      <Competition {maps} />
    </div>
  {/snippet}
</Story>
