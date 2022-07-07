<template>
	<div class="listings">
		<div class="card-display py-4">
			<CarCard v-for="car in cars" :key="car.id" :car="car" />
			<Footer :car="foot" />
		</div>
	</div>
</template>
<script>
	import CarCard from "../components/CarCard.vue";
	import Footer from "../components/Footer.vue";
	export default {
		components: { CarCard, Footer },
		data() {
			return {
				cars: [],
			};
		},
		mounted() {
			fetch("http://localhost:3000/cars")
				.then((res) => res.json())
				.then((data) => (this.cars = data))
				.catch((err) => console.log(err.message));
		},
	};
</script>
<style scoped>
	.listings {
		background-color: white;
	}
</style>
