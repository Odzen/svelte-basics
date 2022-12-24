import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name_1: 'Juan',
		lastName_1: "Velasquez"
	}
});

export default app;