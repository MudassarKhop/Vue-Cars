<template>
	<div class="home">
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
