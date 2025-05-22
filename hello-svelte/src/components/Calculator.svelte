<script lang="ts">
	import Button from "./Button.svelte";
	import Line from "./Line.svelte";
	import Screen from "./Screen.svelte";

	let value = '0'

	function digitNumber(number : string) {
		console.log(number)
		value += number
	}
</script>

<div class="calculator">
    <Screen value={value}/>
	<Line>
		<Button triple highlight text="AC"/>
		<Button operation text="/"/>
	</Line>
	<Line>
		<Button text="7" onClick={digitNumber}/>
		<Button text="8" onClick={digitNumber}/>
		<Button text="9" onClick={digitNumber}/>
		<Button operation text="*"/>
	</Line>
	<Line>
		<Button text="4" onClick={digitNumber}/>
		<Button text="5" onClick={digitNumber}/>
		<Button text="6" onClick={digitNumber}/>
		<Button operation text="-" />
	</Line>
	<Line>
		<Button text="1" onClick={digitNumber}/>
		<Button text="2" onClick={digitNumber}/>
		<Button text="3" onClick={digitNumber}/>
		<Button operation text="+" />
	</Line>
	<Line>
		<Button double text="0" onClick={digitNumber}/>
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
