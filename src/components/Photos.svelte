<script>
  import { onMount } from 'svelte';
  import Input from './Input.svelte';

  let characters = [];
  let filtered = [];
  let name = 'rick';
  let status = 'alive';

  const filterByName = () => {
    filtered = characters.filter((character) => character.name.match(name));
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`
    );

    const data = await response.json();

    console.log(data.results);

    characters = data.results;
    filtered = characters;
  };

  onMount(async () => {
    console.log('On mount');
    fetchData();
  });
</script>

<div class="Photos">
  <h1>Photos</h1>
  <input bind:value={name} on:keyup={filterByName} />
  <!-- <Input name on:keyup={filterByName} /> -->
  <section>
    <!-- {#if filtered.length > 0} -->
    {#each filtered as character}
      <figure>
        <img src={character.image} alt={character.name} />
        <figcaption>{character.name}</figcaption>
      </figure>
    {/each}
    <!-- {:else}
      {#each characters as character}
        <figure>
          <img src={character.image} alt={character.name} />
          <figcaption>{character.name}</figcaption>
        </figure>
      {:else}
        <p>Loading...</p>
      {/each}
    {/if} -->
  </section>
</div>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;
    padding: 2.5rem;
  }

  figure {
    margin: 0;
    text-align: center;
  }

  img {
    width: 100%;
  }
</style>
