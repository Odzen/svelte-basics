<script>
  export let value = 'World';
</script>

<div class="Input">
  <input type="text" bind:value />
  <p>Hello {value}</p>
</div>
