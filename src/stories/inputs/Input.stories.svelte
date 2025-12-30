<script module>
  // @ts-nocheck

  import '../../routes/layout.css';

  import { defineMeta } from '@storybook/addon-svelte-csf';

  import rl_stock from '$lib/assets/tf/rl_stock.png';
  import rl_original from '$lib/assets/tf/rl_original.png';
  import rl_mangler from '$lib/assets/tf/rl_mangler.png';

  import Label from '$lib/components/input/Label.svelte';
  import Input from '$lib/components/input/Input.svelte';
  import Select from '$lib/components/input/select/Select.svelte';
  import SelectButton from '$lib/components/input/select/SelectButton.svelte';
  import SelectClass from '$lib/components/input/select/SelectClass.svelte';

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

<Story
  name="Select Buttons"
  args={{
    label: 'rocket launchers',
    options: [
      { src: rl_stock, value: 'Stock' },
      { src: rl_original, value: 'Original' },
      { src: rl_mangler, value: 'Mangler' }
    ],
    withNone: true,
    selected: 'Stock',
    onsubmit: (value) => {}
  }}>
  {#snippet template(args)}
    <SelectButton {...args} />
  {/snippet}
</Story>

<Story name="Select Class" args={{ selected: 'Soldier', onsubmit: (value) => {} }}>
  {#snippet template(args)}
    <SelectClass {...args} />
  {/snippet}
</Story>
