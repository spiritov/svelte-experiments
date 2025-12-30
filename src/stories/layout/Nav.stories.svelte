<script module>
  // @ts-nocheck

  import '../../routes/layout.css';

  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Nav from '$lib/components/layout/nav/Nav.svelte';
  import InnerNav from '$lib/components/layout/InnerNav.svelte';

  const { Story } = defineMeta({
    component: Nav
  });

  const session = {
    displayName: 'dreambreaker',
    id: '1',
    role: 'Admin',
    steamAvatarUrl:
      'https://avatars.fastly.steamstatic.com/a601329884762a3ae565a8cf369ef9f4178b0daf_full.jpg'
  };
</script>

<Story name="Nav" args={{ route: '/', session: session }}></Story>

<Story
  name="Inner Nav"
  args={{
    route: '/',
    parentRoute: 'monthly',
    pages: ['/', 'nameless route', 'a named route', 'another route']
  }}>
  {#snippet template(args)}
    <InnerNav {...args} />
  {/snippet}
</Story>
