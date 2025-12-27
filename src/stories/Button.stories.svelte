<script module>
  import '../routes/layout.css';

  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Button from '$lib/components/input/Button.svelte';

  const { Story } = defineMeta({
    component: Button
  });

  const onsubmit = async () => {
    return { error: false, message: 'success' };
  };
</script>

<Story name="Button" args={{ onsubmit }}>
  <span>placeholder</span>
</Story>

<Story
  name="Check Button"
  args={{
    onsubmit: async () => {
      return null;
    }
  }}>
  <span class="icon-[mdi--check] w-6"></span>
</Story>
