<script>
	import { socket } from '$lib/socket'

	const testSocket = () => {
		socket.emit('test')
		console.log(1)
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={testSocket}>send test socket</button>