<script module>
  import '../routes/layout.css';

  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Label from '$lib/components/input/Label.svelte';
  import Input from '$lib/components/input/Input.svelte';
  import Select from '$lib/components/input/select/Select.svelte';

  const { Story } = defineMeta({
    component: Label
  });

  const onsubmit = async () => {
    return { error: false, message: 'success' };
  };

  const options = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
</script>

<Story
  name="Text Input"
  args={{
    label: 'text input'
  }}>
  {#snippet template(args)}
    <Label label={args.label}>
      <Input type="text" placeholder="placeholder" {onsubmit} />
    </Label>
  {/snippet}
</Story>

<Story
  name="Select Options"
  args={{
    label: 'select from options'
  }}>
  {#snippet template(args)}
    <Label label={args.label}>
      <Select type="button" {options} {onsubmit} />
    </Label>
  {/snippet}
</Story>

<Story
  name="Select Autofill"
  args={{
    label: 'input with autofill'
  }}>
  {#snippet template(args)}
    <Label label={args.label}>
      <Select type="text" placeholder="placeholder" {options} {onsubmit} />
    </Label>
  {/snippet}
</Story>
