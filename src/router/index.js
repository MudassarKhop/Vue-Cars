import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/home",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/cars",
		name: "car",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/CarListingView.vue"),
	},
	{
		path: "/admin",
		name: "admin",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AdminView.vue"),
	},
	{
		path: "/carsolo/:id",
		name: "carsolo",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/CarSingleView.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
