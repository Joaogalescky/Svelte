<script lang="ts">
	import Button from "./Button.svelte";
	import Line from "./Line.svelte";
	import Screen from "./Screen.svelte";
</script>

<div class="calculator">
    <Screen value="012345678"/>
	<Line>
		<Button triple highlight text="AC" />
		<Button operation text="/" />
	</Line>
	<Line>
		<Button text="7" />
		<Button text="8" />
		<Button text="9" />
		<Button operation text="*" />
	</Line>
	<Line>
		<Button text="4" />
		<Button text="5" />
		<Button text="6" />
		<Button operation text="-" />
	</Line>
	<Line>
		<Button text="1" />
		<Button text="2" />
		<Button text="3" />
		<Button operation text="+" />
	</Line>
	<Line>
		<Button double text="0" />
		<Button text="," />
		<Button highlight text="=" />
	</Line>
</div>

<style>
	.calculator {
		background-color: var(--background-color);
		display: flex;
		flex-direction: column;
		height: 220px;
		width: 150px;
		padding: 5px;
		border-radius: 10px;
	}
</style>
