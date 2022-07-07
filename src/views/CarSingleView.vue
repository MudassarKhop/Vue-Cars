<template>
	<div class="details">
		<div v-if="car">
			<img id="image" :src="car.img" alt="" />
			<h1>{{ car.title }}</h1>
			<p>{{ car.description }}</p>
			<p><i class="fa-solid fa-bolt-lightning"></i> {{ car.topSpeed }}km/h</p>
			<p><i class="fa-solid fa-horse-head"></i> {{ car.horsepower }}hp</p>
			<p><i class="fa-solid fa-dollar-sign"></i> {{ car.price }}M</p>
			<p><i class="fa-solid fa-droplet"></i> {{ car.color }}</p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				car: null,
			};
		},
		mounted() {
			fetch("http://localhost:3000/cars/" + this.$route.params.id)
				.then((res) => res.json())
				.then((data) => (this.car = data))
				.catch((err) => console.log(err.message));
		},
	};
</script>
<style scoped>
	.details {
		height: auto;
	}
	#image {
		border: 5px red;
		height: 600px;
		width: 500px;
	}
</style>
