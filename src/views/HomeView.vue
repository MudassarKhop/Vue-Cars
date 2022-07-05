<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<Landing :car="head" />
	</div>
</template>

<script>
	import Landing from "@/components/Landing.vue";

	export default {
		name: "Home",
		components: {
			Landing,
		},
	};
</script>
