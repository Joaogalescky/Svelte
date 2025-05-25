<script lang="ts">
	import { object_without_properties } from "svelte/internal";
	import Button from "./Button.svelte";
	import Line from "./Line.svelte";
	import Screen from "./Screen.svelte";
 	import CalculatorModel from "../model/CalculatorModel";

	let calc = new CalculatorModel()

	const digitNumber = (num : string) => calc = calc.digitNumber(num)
	const digitOperation = (operation : string) => calc = calc.digitOperation(operation)
	const calculate = () => calc = calc.calculate()
	const digitDot = () => calc = calc.digitDot()
	const clear = () => calc = calc.clear()
</script>

<div class="calculator">
    <Screen value={calc.value}/>
	<Line>
		<Button triple highlight text="AC" onClick={clear}/>
		<Button operation text="/" onClick={digitOperation}/>
	</Line>
	<Line>
		<Button text="7" onClick={digitNumber}/>
		<Button text="8" onClick={digitNumber}/>
		<Button text="9" onClick={digitNumber}/>
		<Button operation text="*" onClick={digitOperation}/>
	</Line>
	<Line>
		<Button text="4" onClick={digitNumber}/>
		<Button text="5" onClick={digitNumber}/>
		<Button text="6" onClick={digitNumber}/>
		<Button operation text="-" onClick={digitOperation}/>
	</Line>
	<Line>
		<Button text="1" onClick={digitNumber}/>
		<Button text="2" onClick={digitNumber}/>
		<Button text="3" onClick={digitNumber}/>
		<Button operation text="+" onClick={digitOperation}/>
	</Line>
	<Line>
		<Button double text="0" onClick={digitNumber}/>
		<Button text="," onClick={digitDot}/>
		<Button highlight text="=" onClick={calculate}/>
	</Line>
</div>

<style>
	.calculator {
		background-color: var(--background-color);
		display: flex;
		flex-direction: column;
		height: 240px;
		width: 200px;
		padding: 10px;
		border-radius: 10px;
		font-size: 18px;
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
