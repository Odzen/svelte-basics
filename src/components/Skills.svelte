<script>
  let skills = [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    },
    {
      id: 3,
      name: 'JavaScript',
    },
  ];
</script>

<div class="Skills">
  <h3>Habilidades</h3>
  <ol>
    {#each skills as { name }, i}
      <li>{name}</li>
    {/each}
  </ol>
</div>

<style>
  .Skills {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ol {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
    margin: 0 0 0 0.4em;
  }
</style>
