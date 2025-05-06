<script lang="ts">
	export let text: string;
	export let double: boolean = false;
	export let triple: boolean = false;
	export let operation: boolean = false;
	export let highlight: boolean = false;
</script>

<button
	class="button"
	class:triple
	class:double
	class:operation
	class:highlight
>
	<!-- ${triple ? 'triple' : ''}`} -->
	{text}
</button>

<style>
	.button {
		margin: 0;
		border: 1px solid var(--background-color);
		flex-basis: 25%;
	}

	.double {
		flex-basis: 50%;
	}

	.triple {
		flex-basis: 75%;
	}

	.operation {
		background-color: rgb(219, 174, 85);
		color: white;
	}

	.highlight {
		background-color: rgb(255, 80, 80);
		color: white;
	}
</style>
