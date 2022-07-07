<template>
	<section id="landing">
		<div class="heading">
			<h1 id="Welcome">Welcome TO <span>Innovation</span></h1>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
				velit animi corporis rerum, impedit dicta suscipit porro esse,
				laboriosam minus, odit quaerat unde exercitationem harum quasi
				consequatur. Tempora, sunt consequuntur!
			</p>
		</div>
	</section>
	<Footer :car="foot" />
</template>
<script>
	import Footer from "../components/Footer.vue";

	export default {
		components: { Footer },
		props: ["head"],
	};
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}
	body {
		background-image: url("https://raw.githubusercontent.com/MudassarKhop/car/main/pexels-adrian-dorobantu-2127733.jpg");
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: 100% 100%;
	}
	#landing {
		height: 100vh;
	}
	.heading {
		margin-bottom: 10%;
	}
	#Welcome {
		text-shadow: 1px 3px black;
	}
	.text {
		text-shadow: 1px 2px black;
		padding-left: 20%;
		padding-right: 20%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
	}
</style>
