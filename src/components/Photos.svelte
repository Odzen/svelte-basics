<script>
  import { onMount } from 'svelte';
  import Input from './Input.svelte';

  import Select from './Select.svelte';

  let characters = [];

  let states = ['All', 'Alive', 'Dead', 'unknown'];
  let selected = 'All';

  let name = '';

  const fetchData = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);

    const data = await response.json();

    console.log(data.results);

    characters = data.results;
  };

  onMount(async () => {
    fetchData();
  });

  $: filtered = characters;

  $: if (selected || name) filterCharacters();

  const filterCharacters = () => {
    if (selected === 'All')
      return (filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      ));

    return (filtered = characters.filter(
      (character) =>
        character.status === selected &&
        character.name.toLowerCase().includes(name.toLowerCase())
    ));
  };
</script>

<div class="Photos">
  <h1>Photos</h1>
  <!-- <input bind:value={name} on:keyup={filterByName} /> -->
  <Input bind:value={name} />
  <Select bind:value={selected} bind:options={states} />

  <!-- <select bind:value={selected}>
    {#each states as status}
      <option value={status}>
        {status}
      </option>
    {/each}
  </select> -->

  <h1>{name}</h1>
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
