<script>
  import Button from '$lib/components/input/Button.svelte';
  import Section from '$lib/components/layout/Section.svelte';
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
</Section>
