<template>
	<div>
		<div id="nav">
			<nav
				class="navbar navbar-expand-lg bg-transparent border-bottom border-light"
			>
				<div class="container-fluid bg-transparent">
					<a id="nav-head" class="navbar-brand" href="#"
						><i class="fa-solid fa-bolt"></i>Muda Autohaus</a
					>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarScroll"
						aria-controls="navbarScroll"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarScroll">
						<ul
							class="navbar-nav me-auto my-4 my-lg-0 navbar-nav-scroll"
							style="--bs-scroll-height: 100px justify-content-center"
						>
							<li><router-link to="/home">Home</router-link></li>
							<li><router-link to="/about">About</router-link></li>
							<li><router-link to="/cars">Cars</router-link></li>
							<li><router-link to="/admin">Admin</router-link></li>
							<li id="nav-link" class="nav-item px-3">
								<a class="nav-link text-light"
									><i class="fa-solid fa-phone-volume"></i> 888-999-7777</a
								>
							</li>
							<li id="nav-link" class="nav-item px-3">
								<button
									id="profile"
									class="btn btn-secondary bg-transparent"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									data-bs-custom-class="custom-tooltip"
									title="0 FAVOURITES"
								>
									<i class="fa-solid fa-user"></i>
								</button>
							</li>
							<button
								id="btn"
								class="button border border-light rounded"
								type="button"
							>
								CREATE A LISTING
							</button>
						</ul>
					</div>
				</div>
			</nav>
			|
		</div>
	</div>
</template>
<script>
	export default {};
</script>
<style>
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: white;
	}
	.fa-solid {
		color: #a4d236;
	}
	#nav {
		color: black;
		background-color: rgb(51, 40, 40);
	}
	#nav-head {
		margin-left: 12%;
		font-size: 30px;
		font-family: "Racing Sans One", cursive;
		color: white;
		text-shadow: 3px 3px 4px black;
	}
	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
	@media only screen and (max-width: 992px) {
		#logo {
			display: none;
		}
		#footer1 {
			display: none;
		}
		#nav-foot {
			position: relative;
			left: 0%;
			right: 0%;
		}
		#nav-foot2 {
			display: none;
		}
		#nav-foot3 {
			display: none;
		}
		#footer {
			height: auto;
		}
		#footer1 {
			height: auto;
		}
		#footer2 {
			height: auto;
		}
	}
</style>
