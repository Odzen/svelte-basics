<script>
  import Button from './Button.svelte';

  let text = `Developer at Macondo`;
  let count = 0;
  let styles = { darkMode: false };

  const toggle = () => {
    styles.darkMode = !styles.darkMode; // Para mostrar condicionales
    window.document.body.classList.toggle('dark-mode'); // Intenractuar directamente con el DOM real
  };
</script>

<div class="About">
  {#if !styles.darkMode}
    <p>{text}</p>
  {:else}
    <p>
      <span>Hello Dark Mode</span>
    </p>
  {/if}

  <Button text="Click" {count} on:click={() => count++} />

  <Button
    text={styles.darkMode ? 'LightMode🌞' : 'DarkMode🌒'}
    on:click={toggle}
  />
</div>

<style>
  p {
    color: var(--theme-color);
  }
</style>
