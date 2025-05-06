<script lang="ts">
	export let value: string;
</script>

<div class="screen"><span>{value}</span></div>

<style>
	.screen {
		background-color: aliceblue;
        font-size: 1.7rem;
		flex: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
        margin: 2px 1px;
		padding: 0px 5px; /*Vpx Hpx*/
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
		overflow: hidden;
	}
</style>
