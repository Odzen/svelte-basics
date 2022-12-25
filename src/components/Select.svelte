<script>
  export let value = '';
  export let options = [];
</script>

<div>
  <select bind:value>
    {#each options as option}
      <option value={option}>
        {option}
      </option>
    {/each}
  </select>
</div>

<style>
  select {
    border-radius: 20%;
  }
</style>
