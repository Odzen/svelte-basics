<script>
  export let value = '';
</script>

<div class="Input">
  <input bind:value placeholder="Search" on:keyup />
</div>

<style>
  input {
    border-radius: 10px;
  }
</style>
