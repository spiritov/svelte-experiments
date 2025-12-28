<script lang="ts">
  type Props = {
    src: string;
    href: string;
    label: string;
  };

  let { src, href, label }: Props = $props();
</script>

<a class="flex w-fit gap-1 text-primary opacity-75 hover:underline hover:opacity-100" {href}>
  <img class="size-6" {src} alt="" />
  <span>{label}</span>
</a>
