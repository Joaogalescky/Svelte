<script lang="ts">
  import Button from "./Button.svelte";

</script>

<div class="calculator">
    <Button text="7"/>
    <Button text="8"/>
    <Button text="9"/>
</div>

<style>
    .calculator {
        background-color: var(--background-color);
        display: flex;
        flex-direction: column;
        height: 200px;
        width: 150px;
    }
</style>

