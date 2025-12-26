<script lang="ts">
  import Input from '$lib/components/input/Input.svelte';
  import Label from '$lib/components/input/Label.svelte';
  import Select from '$lib/components/input/select/Select.svelte';

  //let testInputResponse: Promise<InputResponse> =
</script>

<span class="mb-10 text-primary">text input component</span>

<Label label="test input">
  <Input
    type="text"
    placeholder="placeholder"
    onsubmit={async (value) => {
      return { error: true, message: 'success' };
    }} />
</Label>

<Label label="test input">
  <Input
    type="date"
    placeholder="placeholder"
    onsubmit={async (value) => {
      return { error: true, message: 'success' };
    }} />
</Label>

<Label label="test input">
  <Input
    type="time"
    placeholder="placeholder"
    onsubmit={async (value) => {
      return { error: true, message: 'success' };
    }} />
</Label>

<span>more test..</span>

<Label label="test input">
  <Select
    type="button"
    options={[
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
      'fourteen'
    ]}
    onsubmit={async () => {
      return { error: false, message: 'success' };
    }} />
</Label>
