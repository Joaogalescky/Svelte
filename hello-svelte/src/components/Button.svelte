<script lang="ts">
	export let text: string;
    export let double: boolean = false;
    export let triple: boolean = false;
</script>

<button class="button" class:triple class:double> <!-- ${triple ? 'triple' : ''}`} -->
	{text}
</button>

<style>
	.button {
		flex-basis: 25%;
	}

	.double {
        flex-basis: 50%;
	}

	.triple {
        flex-basis: 75%;
	}
</style>
