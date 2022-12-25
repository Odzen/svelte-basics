<script>
  import { onMount } from 'svelte';
  import Input from './Input.svelte';
  import axios from 'axios';

  import Select from './Select.svelte';

  let characters = [];

  let states = ['All', 'Alive', 'Dead', 'unknown'];
  let selected = 'All';

  let name = '';

  $: params = {};

  $: if (selected !== '' && selected !== 'All') {
    params.status = selected;
    fetchData();
  }

  $: if (name !== '') {
    params.name = name;
    filter();
  }
  const urlApi = `https://rickandmortyapi.com/api/character`;

  const fetchData = async () => {
    const config = {
      params: params,
    };
    console.log(config.params);
    const { data } = await axios.get(urlApi, config);
    console.log('AFTER FETCHING');
    console.log(data);

    // const data = await response.json();

    characters = data.results;
  };

  let timer;

  const filter = () => {
    clearTimeout(timer);
    // Wait for X ms and then process the request
    timer = setTimeout(() => {
      fetchData();
    }, 500);
  };

  onMount(async () => {
    fetchData();
  });
</script>

<div class="Photos">
  <h1>Photos</h1>

  <Input bind:value={name} />
  <!-- <button on:click={fetchData}>Search</button> -->
  <Select bind:value={selected} bind:options={states} />

  <h1>{name}</h1>
  <section>
    <!-- {#if filtered.length > 0} -->
    <!-- {#each filtered as character}
      <figure>
        <img src={character.image} alt={character.name} />
        <figcaption>{character.name}</figcaption>
      </figure>
    {/each} -->
    <!-- {:else} -->
    {#if characters.length > 0}
      {#each characters as character}
        <figure>
          <img src={character.image} alt={character.name} />
          <figcaption>{character.name}</figcaption>
        </figure>
      {:else}
        <p>Loading...</p>
      {/each}
    {/if}
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
